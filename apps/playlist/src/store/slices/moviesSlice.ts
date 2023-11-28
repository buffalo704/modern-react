import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

interface Action {
  type: string;
  payload: string;
}

export const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state: string[], action: Action) {
      state.push(action.payload);
    },
    removeMovie(state: string[], action: Action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state) => []);
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
