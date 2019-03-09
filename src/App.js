import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseShape } from './components/reusable_props';
import ExpenseSummary from './components/ExpenseSummary';
import * as actions from './actions/actionCreators';
import { withState, compose } from 'recompose';
import './App.css';

const App = (props) => {

  const onAddItemClicked = () => {
    props.setAdding(true);
  }

  const onAddItemFormSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: Date.now(),
      name: event.target.elements.name.value,
      cost: parseFloat(event.target.elements.cost.value),
    }
    props.setAdding(false);
    props.addExpense(expense);
  }

  const renderAddItemForm = () => {
    return (
      <form onSubmit={onAddItemFormSubmit}>
        <input type="text" name="name" placeholder="expense name"/>
        <input type="number" name="cost" placeholder="expense cost" step="0.01" />
        <button type="submit" hidden></button>
      </form>
    );
  }

  return (
    <div className="App">
      {props.isAdding ?
        renderAddItemForm()
        :
        <button onClick={onAddItemClicked}>+</button>
      }
      <ExpenseSummary />
    </div>
  );
}

const props = (propTypes) => (component) => {
  component.propTypes = propTypes;
  return component;
}

const enhance = compose(
  withState('isAdding', 'setAdding', false),
  connect(undefined, (dispatch) => ({
    addExpense: (expense) => dispatch(actions.addExpense(expense)),
  })),
  props({
    addExpense: PropTypes.func.isRequired,
    isAdding: PropTypes.bool.isRequired,
    setAdding: PropTypes.func.isRequired,
  })
);

export default enhance(App);
