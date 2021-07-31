// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local imports
import Task from './Task';
import './styles.scss';

// == Component
const Tasks = ({ tasks, onTaskCheckbox }) => (
  <div className="tasks">
    <ul className="taskList">
      { tasks.map((task) => (
        <Task {...task} key={task.id} onCheckbox={onTaskCheckbox} />
      ))}
    </ul>
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      done: PropTypes.bool,
    }),
  ),
  onTaskCheckbox: PropTypes.func,
};

Tasks.defaultProps = {
  tasks: [],
  onTaskCheckbox: () => {},
};

// == Export
export default Tasks;
