import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SelectedItemsState } from "./store.types";

const initialState: SelectedItemsState = {};

const selectedItemsSlice = createSlice({
  name: "@@selectedItems",
  initialState,
  reducers: {
    toggleItem(state, action: PayloadAction<string>) {
      const itemName = action.payload;
      if (state[itemName]) {
        delete state[itemName];
      } else {
        state[itemName] = true;
      }
    },
  },
});

export const { toggleItem } = selectedItemsSlice.actions;
export const selectedItemsReducer =
  selectedItemsSlice.reducer;
