import React, { useEffect, useState } from 'react';
import CleanInput from '../../components/CleanInput/CleanInput';
import { useDisciplinesQuery, createDiscipline } from '../../utils/api';
import DisciplineInputsItem from '../../components/DisciplineInputsItem/DisciplineInputsItem';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { DEFAULT_NEW_DISCIPLINE_VALUES } from '../../constants';

const DisciplineList = () => {
  const [isCleanInput, setIsCleanInput] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    data,
    refetch,
    isError: isGetDisciplinesError,
  } = useDisciplinesQuery();

  const onAddDiscipline = () => {
    setIsCleanInput(true);
  };

  useEffect(() => {
    if (isGetDisciplinesError) {
      setIsError(isGetDisciplinesError);
    }
  }, [isGetDisciplinesError]);

  const handleSubmit = async (values) => {
    try {
      await createDiscipline({
        ...DEFAULT_NEW_DISCIPLINE_VALUES,
        diciplineName: values.name,
        allHours: values.details,
      });
      await refetch();
      setIsCleanInput(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <div>
      <h3 className="list__header">Все дисциплины</h3>
      <div className="list__inputs-wrapper">
        <div className="list__titles-wrapper">
          <h6 className="list__title">Наименование дисциплины</h6>
          <h6 className="list__title">Нагрузка (ч)</h6>
        </div>
        {data
          && data.map((item) => (
            <DisciplineInputsItem
              data={item}
              refetch={refetch}
              setIsError={setIsError}
            />
          ))}
        {isCleanInput && (
          <CleanInput
            setIsCleanInput={setIsCleanInput}
            refetch={refetch}
            setIsError={setIsError}
            handleSubmit={handleSubmit}
          />
        )}
        <button
          type="button"
          className="list__button"
          onClick={onAddDiscipline}
        >
          Добавить дисциплину
        </button>
      </div>
      {isError && <ErrorComponent setIsError={setIsError} />}
    </div>
  );
};

export default DisciplineList;
