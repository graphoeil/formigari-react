// Imports
import { configureStore } from "@reduxjs/toolkit";
import formigariReducer from "./formigariSlice";

// Store
const store = configureStore({
	reducer:{
		formigari:formigariReducer
	}
});

// Export
export default store;