import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import testReducer from "../../menu/testarea/testReducer";
import eventReducer from "../../menu/event/eventReducer";

const rootReducer = combineReducers({
    form: formReducer,
    test: testReducer,
    events: eventReducer
})

export default rootReducer