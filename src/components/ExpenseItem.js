import React from 'react';
import PropTypes from 'prop-types';
import { expenseShape } from './reusable_props';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const { expense } = props;
  return (
    <div className="expense-item">
      <div>{expense.name}</div>
      <div>${expense.cost}</div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape(expenseShape).isRequired,
};

export default ExpenseItem;
