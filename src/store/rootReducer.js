import { combineReducers } from "redux";
import appReducer from "./app/appReducer";
import authReducer from "./auth/authReducer";
import contactReducer from "./contacts/contactReducer";

export default combineReducers({
	app: appReducer,
	auth: authReducer,
	contact: contactReducer
})