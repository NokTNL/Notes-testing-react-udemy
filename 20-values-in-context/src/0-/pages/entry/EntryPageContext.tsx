import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { entryPageService } from "./entryPageService";
import { EntryOptionItem } from "./types";

/* Reducer and Actions */

const INITIAL_STATE = {
  options: {
    scoops: [] as EntryOptionItem[],
    toppings: [] as EntryOptionItem[],
    hasError: false,
  },
  entries: {
    scoops: [
      {
        name: "Mint chip",
        count: 1,
      },
      {
        name: "Vanilla",
        count: 2,
      },
      {
        name: "Mint chip",
        count: 3,
      },
      {
        name: "Salted caramel",
        count: 4,
      },
    ],
    toppings: [],
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
    };

const reducer = (
  state: EntryPageState,
  action: EntryPageActions
): EntryPageState => {
  switch (action.type) {
    case "LOAD_SCOOPS_OPTIONS": {
      return {
        ...state,
        options: {
          ...state.options,
          scoops: action.payload,
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
    void entryPageService(dispatch, state);
  });

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
