import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal-slice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
