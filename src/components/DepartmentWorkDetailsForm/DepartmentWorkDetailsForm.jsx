import { FormProvider, useForm } from 'react-hook-form';
import { updateDepartmentWork } from '../../utils/api';

const DepartmentWorkDetailsForm = (props) => {
  const {
    data,
    isFormDisabled,
    setIsFormDisabled,
    refetch,
    setIsError,
  } = props;
  const formMethods = useForm({
    defaultValues: {
      courseProject: data.courseProject,
      testsReview: data.testsReview,
      exams: data.exams,
      courseWork: data.courseWork,
      inZe: data.inZe,
      inHours: data.inHours,
      lecturesTotal: data.lecturesTotal,
      labWorkTotal: data.labWorkTotal,
      practiceTotal: data.practiceTotal,
      individualSessions: data.individualSessions,
    },
  });
  const { register, handleSubmit } = formMethods;

  const onSubmit = async (values) => {
    try {
      await updateDepartmentWork({
        ...values,
        id: data.id,
        departmentWorkName: data.departmentWorkName,
        studyYear: data.studyYear,
      });
      await refetch();
      setIsFormDisabled(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form department-work__form department-work__grid-container">
          <div className="department-work__grid-item" />
          <div className="department-work__grid-item">Количество</div>
          <div className="department-work__grid-item">Трудоемкость</div>
          <div className="department-work__grid-item">Часов</div>
          <div className="department-work__grid-item" />
          <div className="department-work__grid-item title-row">
            Курсовые раб
          </div>
          <div className="department-work__grid-item title-row">Зачёты</div>
          <div className="department-work__grid-item title-row">Экзамены</div>
          <div className="department-work__grid-item title-row">
            Курсовое проектир.
          </div>
          <div className="department-work__grid-item title-row">в ЗЕ</div>
          <div className="department-work__grid-item title-row">в часах</div>
          <div className="department-work__grid-item title-row">Лекции</div>
          <div className="department-work__grid-item title-row">
            Лабораторные
          </div>
          <div className="department-work__grid-item title-row">
            Практические
          </div>
          <div className="department-work__grid-item title-row">
            Инд.задания
          </div>
          <div className="department-work__grid-item">
            Наименование дисциплины
          </div>

          <input
            {...register('courseProject')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('testsReview')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('exams')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('courseWork')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('inZe')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('inHours')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('lecturesTotal')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('labWorkTotal')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('practiceTotal')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('individualSessions')}
            className="department-work__grid-item"
            disabled={isFormDisabled}
          />
        </div>
        <div className="department-work__buttons">
          {isFormDisabled ? (
            <button
              type="button"
              className="department-work__button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFormDisabled(false);
              }}
            >
              Изменить план
            </button>
          ) : (
            <button type="submit" className="department-work__button">
              Сохранить изменения
            </button>
          )}
          <button
            type="button"
            className="department-work__button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Экспортировать отчёт (.xls)
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default DepartmentWorkDetailsForm;
