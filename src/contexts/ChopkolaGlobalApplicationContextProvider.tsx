import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useMemo,
    useCallback,
    type ReactNode,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface WindowDimensions {
    winWidth: number;
    winHeight: number;
}

interface AppState {
    user: any;
    authenticated: boolean;
    isRtl: boolean;
    loading: boolean;
    formLoading: boolean;
    windowDimensions: WindowDimensions;
    isMobileScreenView: boolean;
}

type Action =
    | { type: "INITIALIZE_STATE"; payload: Partial<AppState> }
    | { type: "SET_USER"; payload: any }
    | { type: "SET_TOKEN"; payload: string }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_FORM_LOADING"; payload: boolean }
    | { type: "SET_WINDOW_DIMENSIONS"; payload: WindowDimensions };


// -------------------------------------------------------
// Helper
// -------------------------------------------------------

const safeJSONParse = <T,>(key: string, fallback: T): T => {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
        console.error(`Error parsing localStorage key "${key}":`, e);
        return fallback;
    }
};

// -------------------------------------------------------
// Initial State
// -------------------------------------------------------

const initialState: AppState = {
    user: null,
    authenticated: false,
    isRtl: false,
    loading: true,
    formLoading: false,
    windowDimensions: {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    },
    isMobileScreenView: window.innerWidth < 992,
};

// -------------------------------------------------------
// Reducer
// -------------------------------------------------------

const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "INITIALIZE_STATE":
            return { ...state, ...action.payload };

        case "SET_USER":
            localStorage.setItem("USER", JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload,
                authenticated: !!action.payload,
            };

        case "SET_TOKEN":
            localStorage.setItem("ACCESS_TOKEN", action.payload);
            return state;

        case "SET_LOADING":
            return { ...state, loading: action.payload };

        case "SET_FORM_LOADING":
            return { ...state, formLoading: action.payload };

        case "SET_WINDOW_DIMENSIONS":
            return {
                ...state,
                windowDimensions: action.payload,
                isMobileScreenView: action.payload.winWidth < 992,
            };

        default:
            return state;
    }
};


// -------------------------------------------------------
// Context
// -------------------------------------------------------

interface GlobalApplicationContextType extends AppState {
    setUser: (user: any) => void;
    setToken: (token: string) => void;
    setLoading: (loading: boolean) => void;
    setFormLoading: (loading: boolean) => void;
}

const GlobalApplicationContext = createContext<GlobalApplicationContextType | null>(null);

export const useGlobalApplicationContext = (): GlobalApplicationContextType => {
    const context = useContext(GlobalApplicationContext);
    if (context === null) {
        throw new Error(
            "useGlobalApplicationContext must be used inside ChopkolaGlobalApplicationContextProvider"
        );
    }
    return context;
};

export default function ChopkolaGlobalApplicationContextProvider({
  children,
}: ProviderProps) {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Initialize from localStorage
    useEffect(() => {
        const payload = {
            user: safeJSONParse("USER", null),
        };

        dispatch({ type: "INITIALIZE_STATE", payload });
    }, []);

    // Resize listener
    useEffect(() => {
        const handleResize = () => {
            dispatch({
                type: "SET_WINDOW_DIMENSIONS",
                payload: {
                    winWidth: window.innerWidth,
                    winHeight: window.innerHeight,
                },
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Actions
    const setUser = useCallback(
        (user: any) => dispatch({ type: "SET_USER", payload: user }),
        []
    );

    const setToken = useCallback(
        (token: string) => dispatch({ type: "SET_TOKEN", payload: token }),
        []
    );

    const setLoading = useCallback(
        (loading: boolean) => dispatch({ type: "SET_LOADING", payload: loading }),
        []
    );

    const setFormLoading = useCallback(
        (loading: boolean) =>
            dispatch({ type: "SET_FORM_LOADING", payload: loading }),
        []
    );

    const contextValue = useMemo(
        () => ({
            ...state,
            setUser,
            setToken,
            setLoading,
            setFormLoading,
        }),
        [state]
    );

  return (
    <GlobalApplicationContext.Provider value={contextValue}>
      {children}
    </GlobalApplicationContext.Provider>
  );
}
