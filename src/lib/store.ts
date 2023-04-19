import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";

export const store = configureStore({
  reducer: {
    media: mediaReducer,
  },
});

// Infer the `Root State` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
