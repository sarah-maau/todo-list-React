/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';

// == Local imports
import './styles.scss';

// == Component
const Task = () => (
  <li className="task task--checked">
    <input
      id="task-1"
      className="task__checkbox"
      type="checkbox"
      checked
    />
    <label className="task__label" htmlFor="task-1">
      Procrastiner
    </label>
  </li>
);

// == Export
export default Task;
