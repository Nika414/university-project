import React, { useState } from 'react';
import InputsItem from '../../components/InputsItem/InputsItem';
import CleanInput from '../../components/CleanInput/CleanInput';
import { useDisciplinesQuery } from '../../utils/api';

const DisciplineList = () => {
  const [isCleanInput, setIsCleanInput] = useState(false);
  const { data, refetch } = useDisciplinesQuery();

  const onAddDiscipline = () => {
    setIsCleanInput(true);
  };

  return (
    <div>
      <h3 className="discipline-list__header">Все дисциплины</h3>
      <div className="discipline-list__inputs-wrapper">
        <div className="discipline-list__titles-wrapper">
          <h6 className="discipline-list__title">Наименование дисциплины</h6>
          <h6 className="discipline-list__title">Нагрузка (ч)</h6>
        </div>
        {data && data.map((item) => (
          <InputsItem data={item} refetch={refetch} />
        ))}
        {isCleanInput && <CleanInput setIsCleanInput={setIsCleanInput} refetch={refetch} />}
        <button
          type="button"
          className="discipline-list__button"
          onClick={onAddDiscipline}
        >
          Добавить дисциплину
        </button>
      </div>
    </div>
  );
};

export default DisciplineList;
