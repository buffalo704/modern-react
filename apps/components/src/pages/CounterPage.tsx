import { Button } from '../components/Button';
import { ChangeEvent, FormEvent, useReducer } from 'react';
import { Panel } from '../components/Panel';
import { produce } from 'immer';
import {
  CounterReducer,
  incrementCount,
  decrementCount,
  setValueToAdd, addValueToCount,
} from '../reducer/CounterReducer';

interface CounterPageProps {
  initialCount: number;
}

export const CounterPage = ({ initialCount }: CounterPageProps) => {
  const increment = () => {
    dispatch(incrementCount);
  };
  const decrement = () => {
    dispatch(decrementCount);
  };
  const [state, dispatch] = useReducer(produce(CounterReducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValueToAdd(parseInt(event.target.value)));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addValueToCount);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};
