import { configureStore } from "@reduxjs/toolkit";
import { museumApi } from "../API";

const store = configureStore({
  reducer: {
    [museumApi.reducerPath]: museumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(museumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
