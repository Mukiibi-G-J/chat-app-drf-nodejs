import { updateChatAction, userDetailAction } from "./actions";

export const updateChatState = {
  chatState: false,
};

export const userDetailState = {
  userDetail: "",
};

export const userDetailReducer = (state, action) => {
  if (action?.type === userDetailAction) {
    console.log(action.payload);
    return {
      ...state,
      userDetail: action.payload,
    };
  }
};
export const updateChatReducer = (state, action) => {
  if (action?.type === updateChatAction) {
    console.log(action.payload);
    return {
      ...state,
      chatState: action.payload,
    };
  } else {
    return state;
  }
};
