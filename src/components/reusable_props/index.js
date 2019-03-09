import PropTypes from 'prop-types';

export const expenseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired, // in dollars
}
