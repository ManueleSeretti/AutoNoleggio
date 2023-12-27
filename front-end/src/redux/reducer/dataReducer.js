import { SET_CARS, SET_PROFILO, SET_RENTS } from "../actions";

const initialState = {
  cars: "",
  rents: {},
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS: {
      return { ...state, cars: action.payload };
      break;
    }

    case SET_RENTS: {
      return { ...state, rents: action.payload };
      break;
    }

    default:
      return state;
  }
};

export default dataReducer;
