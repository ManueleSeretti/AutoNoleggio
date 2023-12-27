import { SET_PROFILO } from "../actions";

const initialState = {
  token: "",
  profilo: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, token: action.payload.token };
      break;
    }

    case "LOGOUT": {
      return { ...state, token: "" };
      break;
    }
    case SET_PROFILO: {
      return { ...state, profilo: action.payload.token };
      break;
    }

    default:
      return state;
  }
};

export default loginReducer;
