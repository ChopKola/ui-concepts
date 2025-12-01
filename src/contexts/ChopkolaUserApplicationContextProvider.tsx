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

interface AppUserState {
    settings: any;
}

type Action =
    | { type: "INITIALIZE_STATE"; payload: Partial<AppUserState> }
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

const initialState: AppUserState = {
    settings: null
};

// -------------------------------------------------------
// Reducer
// -------------------------------------------------------

const reducer = (state: AppUserState, action: Action): AppUserState => {
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

interface AppUserApplicationContextType extends AppUserState {
    setSettings: (setting: any) => void;
}

const AppUserApplicationContext = createContext<AppUserApplicationContextType | null>(null);

export const useAppUserApplicationContext = (): AppUserApplicationContextType => {
    const context = useContext(AppUserApplicationContext);
    if (context === null) {
        throw new Error(
            "useAppUserApplicationContext must be used inside ChopkolaPublicApplicationContextProvider"
        );
    }
    return context;
};

export default function ChopkolaUserApplicationContextProvider({
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
          <AppUserApplicationContext.Provider value={contextValue}>
              {children}
          </AppUserApplicationContext.Provider>
      );
  }