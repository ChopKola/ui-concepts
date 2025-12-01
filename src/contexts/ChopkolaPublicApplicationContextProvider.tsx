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

interface MarketPlaceState {
    settings: any;
}

type Action =
    | { type: "INITIALIZE_STATE"; payload: Partial<MarketPlaceState> }
    | { type: "SET_SETTINGS"; payload: any }

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

const initialState: MarketPlaceState = {
    settings: null
};

// -------------------------------------------------------
// Reducer
// -------------------------------------------------------

const reducer = (state: MarketPlaceState, action: Action): MarketPlaceState => {
    switch (action.type) {
        case "INITIALIZE_STATE":
            return { ...state, ...action.payload };

        case "SET_SETTINGS":
            localStorage.setItem("SETTINGS", JSON.stringify(action.payload));
            return {
                ...state,
                settings: action.payload
            };

        default:
            return state;
    }
};

// -------------------------------------------------------
// Context
// -------------------------------------------------------

interface PublicFacingApplicationContextType extends MarketPlaceState {
    setSettings: (setting: any) => void;
}

const PublicFacingApplicationContext = createContext<PublicFacingApplicationContextType | null>(null);

export const usePublicFacingApplicationContext = (): PublicFacingApplicationContextType => {
    const context = useContext(PublicFacingApplicationContext);
    if (context === null) {
        throw new Error(
            "usePublicFacingApplicationContext must be used inside ChopkolaPublicApplicationContextProvider"
        );
    }
    return context;
};

export default function ChopkolaPublicApplicationContextProvider({
  children,
}: ProviderProps) {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    // Initialize from localStorage
    useEffect(() => {
        const payload = {
            settings: safeJSONParse("SETTINGS", null),
        };

        dispatch({ type: "INITIALIZE_STATE", payload });
    }, []);
    
    // Actions
    const setSettings = useCallback(
        (settings: any) => dispatch({ type: "SET_SETTINGS", payload: settings }),
        []
    );

    const contextValue = useMemo(
        () => ({
            ...state,
            setSettings
        }),
        [state]
    );
    

    return (
        <PublicFacingApplicationContext.Provider value={contextValue}>
            {children}
        </PublicFacingApplicationContext.Provider>
    );
}
