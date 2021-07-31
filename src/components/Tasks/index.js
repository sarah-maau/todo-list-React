// == Import npm
import React from 'react';

// == Local imports 
import Task from './Task'
import './styles.scss';

// == Component
const Tasks = () => (
  <ul className="tasks">
    <li>Composant : Tasks</li>
    <Task />
  </ul>
);

// == Export
export default Tasks;
