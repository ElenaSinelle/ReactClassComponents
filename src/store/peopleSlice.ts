import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store.types";
import { PeopleState } from "./store.types";
import { PersonData } from "../types/common.types";

const initialState: PeopleState = {
  selected: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    selectPerson(state, action: PayloadAction<PersonData>) {
      state.selected.push(action.payload);
    },
    unselectPerson(
      state,
      action: PayloadAction<PersonData>,
    ) {
      state.selected = state.selected.filter(
        person => person.name !== action.payload.name,
      );
    },
    unselectAll(state) {
      state.selected = [];
    },
  },
});

export const { selectPerson, unselectPerson, unselectAll } =
  peopleSlice.actions;

export const selectSelectedPeople = (state: RootState) =>
  state.people.selected;

export const peopleReducer = peopleSlice.reducer;
