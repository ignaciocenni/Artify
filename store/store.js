import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "./slice";
import { artifyApi } from "./artifyApi";

export default configureStore({
  reducer: {
    valores: Slice.reducer,
    [artifyApi.reducerPath]: artifyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(artifyApi.middleware),
});
