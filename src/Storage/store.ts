import { configureStore } from "@reduxjs/toolkit";
import { imageApi, museumApi, newsApi } from "../API";

const store = configureStore({
  reducer: {
    [museumApi.reducerPath]: museumApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(museumApi.middleware)
      .concat(imageApi.middleware)
      .concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
