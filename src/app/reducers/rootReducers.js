import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import testReducer from "../../menu/testarea/testReducer";
import eventReducer from "../../menu/event/eventReducer";
import modalReducer from "../../menu/modals/modalReducer"
import authReducer from "../../menu/auth/authReducer";

const rootReducer = combineReducers({
    form: formReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer