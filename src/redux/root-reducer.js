import { combineReducers } from "redux";
import genReducer from "./generator/gen.reducer";

const rootReducer = combineReducers({
  gen: genReducer,
});

export default rootReducer;
