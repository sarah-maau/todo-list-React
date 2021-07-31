// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Local imports
import './styles.scss';

// == Component
const Form = ({ inputValue, onInputChange, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form className="addTaskForm" onSubmit={handleSubmit}>
      <input
        className="addTaskForm__input"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

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
