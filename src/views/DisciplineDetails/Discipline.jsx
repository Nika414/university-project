import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DisciplineDetailsForm from '../../components/DisciplineDetailsForm/DisciplineDetailsForm';
import {
  useDisciplineByIdQuery,
  useStudentGroupDataQuery,
} from '../../utils/api';
import StudentGroupForm from '../../components/StudentGroupForm/StudentGroupForm';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const Discipline = () => {
  const { id } = useParams();
  const { data, refetch } = useDisciplineByIdQuery(id);
  const { data: studentGroupData, refetch: refetchStudentGroup } = useStudentGroupDataQuery(id);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [isError, setIsError] = useState(false);

  const [numberOfStudentsBudget, setNumberOfStudentsBudget] = useState();
  const [numberOfStudentsPaid, setNumberOfStudentsPaid] = useState();

  return (
    data
    && studentGroupData && (
      <div>
        <h3 className="discipline__header">{data.diciplineName}</h3>
        <div className="discipline__content-wrapper">
          <div className="discipline__information-block-wrapper">
            <div className="discipline__information-block">
              <span>
                {`Кол-во потоков: ${studentGroupData.numberOfStreams}`}
              </span>
              <span>{`Кол-во групп: ${studentGroupData.numberOfGroups}`}</span>
              <span>
                {`Кол-во подгрупп: ${studentGroupData.numberOfSubgroups}`}
              </span>
            </div>
            <StudentGroupForm
              data={studentGroupData}
              setNumberOfStudentsBudget={setNumberOfStudentsBudget}
              setNumberOfStudentsPaid={setNumberOfStudentsPaid}
              isFormDisabled={isFormDisabled}
            />
          </div>

          <div>
            <h4 className="discipline__load-header">Часы нагрузки</h4>
            <div>
              <DisciplineDetailsForm
                setIsError={setIsError}
                data={data}
                isFormDisabled={isFormDisabled}
                setIsFormDisabled={setIsFormDisabled}
                refetch={refetch}
                studentGroupData={{
                  ...studentGroupData,
                  numberOfStudentsBudget,
                  numberOfStudentsPaid,
                }}
                refetchStudentGroup={refetchStudentGroup}
              />
              {isError && <ErrorComponent setIsError={setIsError} />}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Discipline;
