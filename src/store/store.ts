import { configureStore } from "@reduxjs/toolkit";
import {
  peopleApi,
  peopleAPIReducer,
} from "../services/peopleApi";
import { peopleReducer } from "./peopleSlice";

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleAPIReducer,
    people: peopleReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});
