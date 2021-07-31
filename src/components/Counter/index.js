// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local imports
import './styles.scss';

// == Component
const Counter = ({ nbTasks }) => (
  <h2 className="taskCounter"> {nbTasks} tâches en cours</h2>
);

Counter.propTypes = {
  nbTasks: PropTypes.number,
};

Counter.defaultProps = {
  nbTasks: 0,
};

// == Export
export default Counter;
