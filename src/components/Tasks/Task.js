/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local imports
import './styles.scss';

// == Component
const Task = ({
  id, label, done, onCheckbox,
}) => (
  <li className={done ? 'task task--checked' : 'task'}>
    <input
      id={`task-${id}`}
      className="task__checkbox"
      type="checkbox"
      checked={done}
      onChange={onCheckbox(id)}
    />
    <label className="task__label" htmlFor={`task-${id}`}>
      {label}
    </label>
  </li>
);

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  done: PropTypes.bool,
  onCheckbox: PropTypes.func,
};

Task.defaultProps = {
  label: 'Tâche non nommée',
  done: false,
  onCheckbox: () => {},
};

// == Export
export default Task;
