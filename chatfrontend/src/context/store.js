import { createContext, useReducer } from "react";
import { updateChatReducer, updateChatState } from "./reducer";

const store = createContext({});
const { Provider } = store;

const initialState = {
  ...updateChatState,
};

//? -------> combined reducers
const reduceReducers =
  (...reducers) =>
  (prevState, value, ...args) => {
    reducers.reduce(
      (newState, reducer) => reducer(newState, value, ...args),
      prevState
    );
  };

const combinedReducers = reduceReducers(...updateChatReducer);

function reducer(state, action) {
  switch (action.type) {
    case updateChatAction: {
      return {
        ...state,
        chatState: action.payload,
      };
    }

    default:
      state;
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducer);
  return <Provider value={{ state, dispatch }}> {children}</Provider>;
};

export { store, Provider };
