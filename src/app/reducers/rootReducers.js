import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import testReducer from "../../menu/testarea/testReducer";
import eventReducer from "../../menu/event/eventReducer";
import modalReducer from "../../menu/modals/modalReducer"
import authReducer from "../../menu/auth/authReducer";
import asyncReducer from "../../menu/async/asyncReducer";

const rootReducer = combineReducers({
    form: formReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReducer