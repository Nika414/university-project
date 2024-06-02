import React, { useState } from 'react';

const CleanInput = (props) => {
  const { handleSubmit } = props;
  const [name, seteName] = useState('');
  const [details, setDetails] = useState('');

  const onNameChange = (e) => {
    seteName(e.target.value);
  };

  const onDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const onSubmit = () => {
    handleSubmit({ name, details });
  };

  return (
    <div className="clean-input">
      <input className="clean-input__input" onChange={onNameChange} />
      <input className="clean-input__input" onChange={onDetailsChange} />
      <button type="submit" className="clean-input__button" onClick={onSubmit}>
        Сохранить
      </button>
    </div>
  );
};

export default CleanInput;
