import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form"
import {reducer as toastrReducer} from "react-redux-toastr"
import testReducer from "../../menu/testarea/testReducer";
import eventReducer from "../../menu/event/eventReducer";
import modalReducer from "../../menu/modals/modalReducer"
import authReducer from "../../menu/auth/authReducer";
import asyncReducer from "../../menu/async/asyncReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore"

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastrReducer
})

export default rootReducer