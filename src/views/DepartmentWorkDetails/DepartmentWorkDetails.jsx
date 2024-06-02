import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDepartmentWorkByIdQuery } from '../../utils/api';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import DepartmentWorkDetailsForm from '../../components/DepartmentWorkDetailsForm/DepartmentWorkDetailsForm';

const DepartmentWorkDetails = () => {
  const { id } = useParams();
  const { data, refetch } = useDepartmentWorkByIdQuery(id);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  return (
    data && (
      <div>
        <h3 className="detalization__header">{data.departmentWorkName}</h3>
        <div className="detalization__content-wrapper">
          <div>
            <h4 className="detalization__table-header">Дисциплины</h4>
            <div>
              <DepartmentWorkDetailsForm
                setIsError={setIsError}
                data={data}
                isFormDisabled={isFormDisabled}
                setIsFormDisabled={setIsFormDisabled}
                refetch={refetch}
              />
              {isError && <ErrorComponent setIsError={setIsError} />}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DepartmentWorkDetails;
