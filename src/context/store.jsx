import { createContext, useReducer } from "react";
import { updateChatState, userDetailState } from "./reducer";
import { updateChatAction, userDetailAction } from "./actions";

const store = createContext({});
const { Provider } = store;

const initialState = {
  ...updateChatState,
  ...userDetailState,
};

// //? -------> combined reducers
// const reduceReducers =
//   (...reducers) =>
//   (prevState, value, ...args) =>
//     reducers.reduce(
//       (newState, reducer) => reducer(newState, value, ...args),
//       prevState
//     );

// const combinedReducers = reduceReducers(
//   updateChatReducer(),

//   userDetailReducer()
// );

function reducer(state, action) {
  switch (action.type) {
    case updateChatAction: {
      return {
        ...state,
        chatState: action.payload,
      };
    }
    case userDetailAction: {
      console.log(action.payload);
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    default:
      return state;
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}> {children}</Provider>;
};

export { store, StoreProvider };
