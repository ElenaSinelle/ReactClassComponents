import { PersonData } from "../types/common.types";
import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface PeopleState {
  selected: PersonData[];
}
