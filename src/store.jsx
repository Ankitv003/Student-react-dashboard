import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import courseReducer from "./reducers/courseReducer";

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
  middleware: [thunk],
});

export default store;
