// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local imports
import Task from './Task';
import './styles.scss';

// == Component
const Tasks = ({ tasks }) => (
  <div className="tasks">
    <ul className="taskList">
      { tasks.map((task) => (
        <Task {...task} key={task.id} />
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
};

Tasks.defaultProps = {
  tasks: [],
};

// == Export
export default Tasks;
