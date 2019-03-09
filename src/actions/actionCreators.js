import * as types from './types';

export function addExpense(expense) {
  return {
    type: types.ADD_EXPENSE,
    payload: expense
  }
}
