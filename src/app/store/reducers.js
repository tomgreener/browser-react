import { combineReducers } from "redux";
import { EXAMPLE_ACTION } from "./actions";

const exampleReducer = (state = {}, action) => {
  switch(action.type) {
    case EXAMPLE_ACTION:
      return action.payload.data
    default:
      return state
  }
};

export default combineReducers({
  example: exampleReducer
});
