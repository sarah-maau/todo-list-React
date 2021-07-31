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
    };
  }

  render() {
    const { tasks } = this.state;
    const tasksInProgress = tasks.filter((task) => !task.done).length;
    return (
      <div className="todoList">
        <Form />
        <Counter nbTasks={tasksInProgress} />
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default TodoList;
