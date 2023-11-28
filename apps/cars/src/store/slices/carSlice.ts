import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import { CarsState, Car} from "../../types";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    searchTerm: '',
  },
  reducers: {
    addCar(state: CarsState, action:PayloadAction<Car>) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      });
    },
    removeCar(state, action:PayloadAction<Car>) {
      state.data = state.data.filter((car: Car) => car.id !== action.payload.id);
    },
    changeSearchTerm(state, action:PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  }
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer  = carsSlice.reducer;
