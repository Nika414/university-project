import React, { useState } from 'react';
import { createDiscipline } from '../../utils/api';
import { DEFAULT_NEW_DISCIPLINE_VALUES } from '../../constants';

const CleanInput = (props) => {
  const { setIsCleanInput, refetch } = props;
  const [disciplineName, setDisciplineName] = useState('');
  const [disciplineLoad, setDisciplineLoad] = useState('');

  const onNameChange = (e) => {
    setDisciplineName(e.target.value);
  };

  const onLoadChange = (e) => {
    setDisciplineLoad(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await
      createDiscipline({ ...DEFAULT_NEW_DISCIPLINE_VALUES, diciplineName: disciplineName, allHours: disciplineLoad });
      await refetch();
      setIsCleanInput(false);
    } catch (err) { console.log(err); }
  };

  return (
    <div className="clean-input">
      <input className="clean-input__input" onChange={onNameChange} />
      <input className="clean-input__input" onChange={onLoadChange} />
      <button type="submit" className="clean-input__button" onClick={handleSubmit}>
        Сохранить
      </button>
    </div>
  );
};

export default CleanInput;
