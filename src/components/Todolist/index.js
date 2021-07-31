/* eslint-disable no-plusplus */
// == Import npm
import React, { PureComponent } from 'react';

// == Local imports
import './styles.scss';
import tasksData from 'src/data/tasks';
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// == Component
class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksData,
      taskInputLabel: '',
    };
  }

  handleTaskInputLabelChange = (event) => {
    this.setState({
      taskInputLabel: event.target.value,
    });
  }

  addTask = (label, done = false) => {
    const { tasks } = this.state;
    let maxID = Math.max(...tasks.map((task) => task.id));
    this.setState({
      tasks: [...tasks, { id: ++maxID, label, done }],
      taskInputLabel: '',
    });
  }

  render() {
    const { tasks, taskInputLabel } = this.state;
    const tasksInProgress = tasks.filter((task) => !task.done).length;
    return (
      <div className="todoList">
        <Form
          onSubmit={this.addTask}
          inputValue={taskInputLabel}
          onInputChange={this.handleTaskInputLabelChange}
        />
        <Counter nbTasks={tasksInProgress} />
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default TodoList;
