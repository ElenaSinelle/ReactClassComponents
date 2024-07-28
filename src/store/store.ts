import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../services/peopleApi";
import { selectedItemsReducer } from "./selectedItemsSlice";

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    selectedItems: selectedItemsReducer,
  },
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware().concat(peopleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
