import React, { useState, useEffect } from 'react';

import CleanInput from '../../components/CleanInput/CleanInput';
import { useDepartmentsWorkQuery, createDepartmentWork } from '../../utils/api';
import DepartmentInputsItem from '../../components/DepartmentInputsItem/DepartmentInputsItem';
import { DEFAULT_NEW_DEPARTMENT_WORK_VALUES } from '../../constants';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const DepartmentWorkList = () => {
  const [isCleanInput, setIsCleanInput] = useState(false);
  const { data, refetch, isGetDepartmentWorkError } = useDepartmentsWorkQuery();
  const [isError, setIsError] = useState(false);

  const onAddDepartmentWork = () => {
    setIsCleanInput(true);
  };

  useEffect(() => {
    if (isGetDepartmentWorkError) {
      setIsError(isGetDepartmentWorkError);
    }
  }, [isGetDepartmentWorkError]);

  const handleSubmit = async (values) => {
    try {
      await createDepartmentWork({
        ...DEFAULT_NEW_DEPARTMENT_WORK_VALUES,
        departmentWorkName: values.name,
        studyYear: values.details,
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
      <h3 className="list__header">Все учебные планы</h3>
      <div className="list__inputs-wrapper">
        <div className="list__titles-wrapper">
          <h6 className="list__title">Наименование учебного плана</h6>
          <h6 className="list__title">Дата</h6>
        </div>
        {data
          && data.map((item) => (
            <DepartmentInputsItem data={item} refetch={refetch} />
          ))}
        {isCleanInput && (
          <CleanInput setIsCleanInput={setIsCleanInput} refetch={refetch} handleSubmit={handleSubmit} />
        )}
        <button
          type="button"
          className="list__button"
          onClick={onAddDepartmentWork}
        >
          Добавить учебный план
        </button>
      </div>
      {isError && <ErrorComponent setIsError={setIsError} />}
    </div>
  );
};

export default DepartmentWorkList;
