// == Import npm
import React from 'react';

// == Local imports
import './styles.scss';

// == Component
const Form = () => (
  <form className="addTaskForm">
    <input
      className="addTaskForm__input"
      placeholder="Ajouter une tâche"
    />
  </form>
);

// == Export
export default Form;
