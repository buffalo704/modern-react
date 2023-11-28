import React from 'react';
import {useSelector} from "react-redux";
import {Car, RootState} from "../types";

export const CarValue = () => {
  const totalCost = useSelector(({cars: {data, searchTerm}}:RootState) => data
    .filter((car: Car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .reduce((acc: number, car: Car) => acc + car.cost, 0));
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};
