import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName, addCar } from '../store';

export const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state: any) => state.form);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
      </form>
    </div>
  );
};
