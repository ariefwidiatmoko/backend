import { combineReducers } from "C:/Users/arief/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import testReducer from "../../menu/testarea/testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer