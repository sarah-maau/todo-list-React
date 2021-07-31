// == Import npm
import React from 'react';
import { render } from 'react-dom';

// == Local imports
// Component
import TodoList from './components/Todolist';

// == Render
const rootReactElement = <TodoList />;
const target = document.getElementById('root');
render(rootReactElement, target);
