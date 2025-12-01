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

interface BackOfficeState {
    settings: any;
}

type Action =
    | { type: "INITIALIZE_STATE"; payload: Partial<BackOfficeState> }
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

const initialState: BackOfficeState = {
    settings: null
};

// -------------------------------------------------------
// Reducer
// -------------------------------------------------------

const reducer = (state: BackOfficeState, action: Action): BackOfficeState => {
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

interface AdministratorUserApplicationContextType extends BackOfficeState {
    setSettings: (setting: any) => void;
}

const AdministratorUserApplicationContext = createContext<AdministratorUserApplicationContextType | null>(null);

export const useAdministratorUserApplicationContext = (): AdministratorUserApplicationContextType => {
    const context = useContext(AdministratorUserApplicationContext);
    if (context === null) {
        throw new Error(
            "useAdministratorUserApplicationContext must be used inside ChopkolaAdministratorUserApplicationContextProvider"
        );
    }
    return context;
};

export default function ChopkolaAdministratorUserApplicationContextProvider({
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
          <AdministratorUserApplicationContext.Provider value={contextValue}>
              {children}
          </AdministratorUserApplicationContext.Provider>
      );
  }
  