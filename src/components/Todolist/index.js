// == Import npm
import React from 'react';

// == Local imports
import './styles.scss';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Component
const TodoList = () => (
  <div className="toDoList">
    <Form />
    <Counter />
    <Tasks />
  </div>
);

// == Export
export default TodoList;
