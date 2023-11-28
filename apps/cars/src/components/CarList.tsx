import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store/slices/carSlice';
import {Car, RootState} from '../types';

export const CarList = () => {
  const {cars, name}  = useSelector(({ form, cars: {data, searchTerm}}: RootState) => {
    const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm));

    return {
      cars: filteredCars,
      name: form.name
    }
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car));
  };

  const carListing = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return <div className="car-list">{carListing}<hr /></div>;
};
