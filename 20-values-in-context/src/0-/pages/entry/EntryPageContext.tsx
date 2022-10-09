import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { entryPageThunk } from "./entryPageThunk";
import { EntryOptionItem } from "./types";

/* Reducer and Actions */

const INITIAL_STATE = {
  options: {
    scoops: [] as EntryOptionItem[],
    toppings: [] as EntryOptionItem[],
    hasError: false,
  },
  entries: {
    scoops: new Map<string, number>(),
    toppings: new Map<string, number>(),
  },
};

export type EntryPageState = typeof INITIAL_STATE;

export type EntryPageActions =
  | {
      type: "LOAD_SCOOPS_OPTIONS";
      payload: EntryOptionItem[];
    }
  | {
      type: "LOAD_TOPPINGS_OPTIONS";
      payload: EntryOptionItem[];
    }
  | {
      type: "OPTIONS_HAS_ERROR";
    }
  | {
      type: "CHANGE_SCOOPS_COUNT";
      payload: { name: string; count: number };
    }
  | {
      type: "CHANGE_TOPPINGS_COUNT";
      payload: { name: string; count: number };
    };

const reducer = (state: EntryPageState, action: EntryPageActions) => {
  switch (action.type) {
    case "LOAD_SCOOPS_OPTIONS": {
      return {
        ...state,
        options: {
          ...state.options,
          scoops: action.payload,
        },
        entries: {
          ...state.entries,
          scoops: new Map(action.payload.map((item) => [item.name, 0])),
        },
      };
    }
    case "LOAD_TOPPINGS_OPTIONS": {
      return {
        ...state,
        options: {
          ...state.options,
          toppings: action.payload,
        },
      };
    }
    case "OPTIONS_HAS_ERROR": {
      return {
        ...state,
        options: {
          ...state.options,
          hasError: true,
        },
      };
    }
    case "CHANGE_SCOOPS_COUNT": {
      const newMap = new Map(Array.from(state.entries.scoops));
      newMap.set(action.payload.name, action.payload.count);

      return {
        ...state,
        entries: {
          ...state.entries,
          scoops: newMap,
        },
      };
    }
    case "CHANGE_TOPPINGS_COUNT": {
      const newMap = new Map(Array.from(state.entries.toppings));
      newMap.set(action.payload.name, action.payload.count);

      return {
        ...state,
        entries: {
          ...state.entries,
          toppings: newMap,
        },
      };
    }
    default:
      throw new Error("Wrong EntryPageContext reducer action type");
  }
};

/* Context & Provider */

export const EntryPageContext = createContext<
  [EntryPageState, Dispatch<EntryPageActions>] | null
>(null);

export const EntryPageProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    void entryPageThunk(dispatch, state);
  }, []);

  return (
    <EntryPageContext.Provider value={[state, dispatch]}>
      {children}
    </EntryPageContext.Provider>
  );
};

/* Custom Hooks */

export const useEntryPageContext = () => {
  const context = useContext(EntryPageContext);
  if (!context) throw Error();
  return context;
};
