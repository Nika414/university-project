import { FormProvider, useForm } from 'react-hook-form';
import { updateDiscipline, updateStudentGroup } from '../../utils/api';

const DisciplineDetailsForm = (props) => {
  const {
    data,
    isFormDisabled,
    setIsFormDisabled,
    refetch,
    studentGroupData,
    refetchStudentGroup,
    setIsError,
  } = props;
  const formMethods = useForm({
    defaultValues: {
      lecturesAccodingToPlan: data.lecturesAccodingToPlan,
      labWorkAccordingToPlan: data.labWorkAccordingToPlan,
      practiceAccordingToPlan: data.practiceAccordingToPlan,
      mpcAccordingToPlan: data.mpcAccordingToPlan,
      akrAccordingToPlan: data.akrAccordingToPlan,
      courseProjectAccordingToPlan: data.courseProjectAccordingToPlan,
      сonsultationsAccordingToPlan: data.сonsultationsAccordingToPlan,
      reviewsAccordingToPlan: data.reviewsAccordingToPlan,
      testsAccordingToPlan: data.testsAccordingToPlan,
      examsAccordingToPlan: data.examsAccordingToPlan,
      educationalPracticeAccordingToPlan:
        data.educationalPracticeAccordingToPlan,
      productionPracticeAccordingToPlan: data.productionPracticeAccordingToPlan,
      graduationProjectAccordingToPlan: data.graduationProjectAccordingToPlan,
      gekgakAccordingToPlan: data.gekgakAccordingToPlan,
      postgraduateAndMasterDegreeAccordingToPlan:
        data.postgraduateAndMasterDegreeAccordingToPlan,
      allHoursAccordingToPlan: data.allHoursAccordingToPlan,
      lectures: data.lectures,
      labWork: data.labWork,
      practice: data.practice,
      mpc: data.mpc,
      akr: data.akr,
      courseProject: data.courseProject,
      сonsultations: data.сonsultations,
      reviews: data.reviews,
      tests: data.tests,
      exams: data.exams,
      educationalPractice: data.educationalPractice,
      productionPractice: data.productionPractice,
      graduationProject: data.graduationProject,
      gekgak: data.gekgak,
      postgraduateAndMasterDegree: data.postgraduateAndMasterDegree,
      allHours: data.allHours,
    },
  });
  const { register, handleSubmit } = formMethods;

  const onSubmit = async (values) => {
    try {
      await updateDiscipline({
        ...values,
        id: data.id,
        diciplineName: data.diciplineName,
      });
      await updateStudentGroup(studentGroupData);
      await refetch();
      await refetchStudentGroup();
      setIsFormDisabled(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form discipline__grid-container">
          <div className="grid-item title-row" />
          <div className="grid-item title-row">Лекции</div>
          <div className="grid-item title-row">Лаб-е</div>
          <div className="grid-item title-row">Практ.</div>
          <div className="grid-item title-row">МРС</div>
          <div className="grid-item title-row">АКР</div>
          <div className="grid-item title-row">Курс. проект</div>
          <div className="grid-item title-row">Консультации</div>
          <div className="grid-item title-row">Реценз. контр. работ</div>
          <div className="grid-item title-row">Зачёты</div>
          <div className="grid-item title-row">Экзамены</div>
          <div className="grid-item title-row">Уч.практика</div>
          <div className="grid-item title-row">Пр.практика</div>
          <div className="grid-item title-row">Диплом. проект.</div>
          <div className="grid-item title-row">ГЭК/ГАК (студ., маг.)</div>
          <div className="grid-item title-row">Аспир/маг.</div>
          <div className="grid-item title-row">Всего часов</div>
          <div className="grid-item">По плану</div>
          <input
            {...register('lecturesAccodingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('labWorkAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('practiceAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('mpcAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('akrAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('courseProjectAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('сonsultationsAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('reviewsAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('testsAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('examsAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('educationalPracticeAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('productionPracticeAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('graduationProjectAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('gekgakAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('postgraduateAndMasterDegreeAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('allHoursAccordingToPlan')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <div className="grid-item">Всего</div>
          <input
            {...register('lectures')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('labWork')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('practice')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('mpc')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('akr')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('courseProject')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('сonsultations')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('reviews')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('tests')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('exams')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('educationalPractice')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('productionPractice')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('graduationProject')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('gekgak')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('postgraduateAndMasterDegree')}
            className="grid-item"
            disabled={isFormDisabled}
          />
          <input
            {...register('allHours')}
            className="grid-item"
            disabled={isFormDisabled}
          />
        </div>
        {isFormDisabled ? (
          <button
            type="button"
            className="discipline__button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFormDisabled(false);
            }}
          >
            Изменить часы нагрузки
          </button>
        ) : (
          <button type="submit" className="discipline__button">
            Сохранить изменения
          </button>
        )}
      </form>
    </FormProvider>
  );
};

export default DisciplineDetailsForm;
