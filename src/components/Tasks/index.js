// == Import npm
import React from 'react';

// == Local imports
import Task from './Task';
import './styles.scss';

// == Component
const Tasks = () => (
  <div className="tasks">
    <ul className="taskList">
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  </div>
);

// == Export
export default Tasks;
