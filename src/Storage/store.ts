import { configureStore } from "@reduxjs/toolkit";
import { imageApi, museumApi } from "../API";

const store = configureStore({
  reducer: {
    [museumApi.reducerPath]: museumApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(museumApi.middleware)
      .concat(imageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
