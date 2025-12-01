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

interface VendorUserState {
    settings: any;
}

type Action =
    | { type: "INITIALIZE_STATE"; payload: Partial<VendorUserState> }
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

const initialState: VendorUserState = {
    settings: null
};

// -------------------------------------------------------
// Reducer
// -------------------------------------------------------

const reducer = (state: VendorUserState, action: Action): VendorUserState => {
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

interface VendorUserApplicationContextType extends VendorUserState {
    setSettings: (setting: any) => void;
}

const VendorUserApplicationContext = createContext<VendorUserApplicationContextType | null>(null);

export const useVendorUserApplicationContext = (): VendorUserApplicationContextType => {
    const context = useContext(VendorUserApplicationContext);
    if (context === null) {
        throw new Error(
            "useVendorUserApplicationContext must be used inside ChopkolaVendorApplicationContextProvider"
        );
    }
    return context;
};

export default function ChopkolaVendorApplicationContextProvider({
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
          <VendorUserApplicationContext.Provider value={contextValue}>
              {children}
          </VendorUserApplicationContext.Provider>
      );
  }
