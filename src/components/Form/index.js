// == Import npm
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// == Local imports
import './styles.scss';

// == Component
class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleSubmit = (event) => {
    const { onSubmit, inputValue } = this.props;
    event.preventDefault();
    onSubmit(inputValue);
  };

  render() {
    const { inputValue, onInputChange } = this.props;
    return (
      <form className="addTaskForm" onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          className="addTaskForm__input"
          placeholder="Ajouter une tâche"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
};

Form.defaultProps = {
  inputValue: '',
  onSubmit: () => {},
  onInputChange: () => {},
};

// == Export
export default Form;
