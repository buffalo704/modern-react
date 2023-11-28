import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

export const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state: string[], action) {
      state.push(action.payload);
    },
    removeSong(state: string[], action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state) => []);
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
