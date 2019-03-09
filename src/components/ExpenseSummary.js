import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseShape } from './reusable_props';
import ExpenseItem from './ExpenseItem';
import './ExpenseSummary.css';

function mapStateToProps(state) {
  return {
    expenses: state.expenses,
  };
}

const ExpenseSummary = (props) => {
  return (
    <div className="expense-summary">
      {props.expenses.map(
        expense => <ExpenseItem key={expense.id} expense={expense} />
      )}
    </div>
  );
}

ExpenseSummary.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape(expenseShape)).isRequired,
};

const enhance = (component) => {
  return connect(mapStateToProps)(component);
}

export default enhance(ExpenseSummary);
