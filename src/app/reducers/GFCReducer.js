import { SET_FAST_CHEAP, SET_GOOD_CHEAP, SET_GOOD_FAST, SET_TOGGLE } from "app/constants";

const initialState = {
  good: true,
  fast: true,
  cheap: false
};

const GFCReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAST_CHEAP: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
        cheap: false,
      }
    }
    case SET_GOOD_FAST: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
        fast: false
      }
    }
    case SET_GOOD_CHEAP: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
        good: false
      }
    }
    case SET_TOGGLE: {
      return {
        ...state,
        [action.payload]: !state[action.payload],
      }
    }
    default: {
      return state;
    }
  }
};

export default GFCReducer;
