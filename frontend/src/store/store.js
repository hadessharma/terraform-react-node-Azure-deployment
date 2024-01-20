import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./functions/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
