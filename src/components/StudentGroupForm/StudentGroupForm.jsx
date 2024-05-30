import { FormProvider, useForm } from 'react-hook-form';

const StudentGroupForm = (props) => {
  const {
    data,
    setNumberOfStudentsBudget,
    setNumberOfStudentsPaid,
    isFormDisabled,
  } = props;

  const formMethods = useForm({
    defaultValues: {
      numberOfStudentsBudget: data.numberOfStudentsBudget,
      numberOfStudentsPaid: data.numberOfStudentsPaid,
    },
  });
  const { register } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form className="discipline__students-amount-block">
        <div>
          {'Кол-во студентов(б): '}
          <input
            className="discipline__students-amount-input"
            {...register('numberOfStudentsBudget')}
            onChange={(e) => setNumberOfStudentsBudget(e.target.value)}
            disabled={isFormDisabled}
          />
        </div>
        <div>
          {'Кол-во студентов(п): '}
          <input
            className="discipline__students-amount-input"
            {...register('numberOfStudentsPaid')}
            onChange={(e) => setNumberOfStudentsPaid(e.target.value)}
            disabled={isFormDisabled}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default StudentGroupForm;
