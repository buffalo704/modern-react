export interface CounterAction {
  type: string;
  payload?: number;
};

export interface CounterState {
  count: number;
  valueToAdd: number;
}

export const INCREMENT_COUNT = 'increment';
export const DECREMENT_COUNT = 'decrement';
export const SET_VALUE_TO_ADD = 'set-value-to-add';
export const ADD_VALUE_TO_COUNT = 'add-value-to-count';

export const incrementCount = {
  type: INCREMENT_COUNT,
};

export const decrementCount = {
  type: DECREMENT_COUNT,
};

export const setValueToAdd = (value: number) => ({
  type: SET_VALUE_TO_ADD,
  payload: value ?? 0,
});

export const addValueToCount = {
  type: ADD_VALUE_TO_COUNT,
};

export const CounterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      if (action.payload != null) {
        state.valueToAdd = action.payload;
      }
      return;
    default:
      return;
  }
};
