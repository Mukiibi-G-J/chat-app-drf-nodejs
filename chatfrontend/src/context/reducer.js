import { updateChatAction } from "./actions";

export const updateChatState = {
  chatState: false,
};

export const updateChatReducer = (state, actions) => {
  if (actions.type === updateChatAction) {
    return {
      ...state,
      chatState: actions.payload,
    };
  } else {
    return state;
  }
};
