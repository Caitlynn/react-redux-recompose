import * as types from '../actions/types';

const initialState = {
  expenses: [
    {
      id: 0,
      name: 'Grocery Shopping',
      cost: 91.50,
    },
    {
      id: 1,
      name: 'TV',
      cost: 1000,
    },
    {
      id: 2,
      name: 'Water Bill',
      cost: 49.30,
    },
  ]
};

export function rootReducer(currentState = initialState, action) {
  const nextState = Object.assign({}, currentState);

  switch (action.type) {
    case types.ADD_EXPENSE:
      Object.assign(nextState, {
        expenses: [
          action.payload,
          ...currentState.expenses
        ]
      });
      break;

    default:
      console.info('unknown action', action);
      break;
  }

  return nextState;
}
