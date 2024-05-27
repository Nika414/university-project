import React from 'react';
import { useParams } from 'react-router-dom';
import { useDisciplineByIdQuery, useStudentGroupDataQuery } from '../../utils/api';

const Discipline = () => {
  const { id } = useParams();
  const { data } = useDisciplineByIdQuery(id);
  const { data: studentGroupData } = useStudentGroupDataQuery(id);

  console.log(data);
  return (data && studentGroupData && (
  <div>
    <h3 className="discipline__header">{data.diciplineName}</h3>
    <div className="discipline__content-wrapper">
      <div>
        <div className="discipline__information-block">
          <span>
            {`Кол-во потоков: ${studentGroupData.numberOfStreams}`}
          </span>
          <span>
            {`Кол-во групп: ${studentGroupData.numberOfGroups}`}
          </span>
          <span>
            {`Кол-во подгрупп: ${studentGroupData.numberOfSubgroups}`}
          </span>
        </div>
        <div className="discipline__students-amount-block">
          <div>
            {'Кол-во студентов(б): '}
            <input className="discipline__students-amount-input" value={studentGroupData.numberOfStudentsBudget} />
          </div>
          <div>
            {'Кол-во студентов(п): '}
            <input className="discipline__students-amount-input" value={studentGroupData.numberOfStudentsPaid} />
          </div>
        </div>
      </div>
      <div>
        <h4 className="discipline__load-header">Часы нагрузки</h4>
        <div className="discipline__load-table">
          <div className="grid-container">
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
            <input className="grid-item" value={data.lecturesAccodingToPlan} disabled />
            <input className="grid-item" value={data.labWorkAccordingToPlan} disabled />
            <input className="grid-item" value={data.practiceAccordingToPlan} disabled />
            <input className="grid-item" value={data.mpcAccordingToPlan} disabled />
            <input className="grid-item" value={data.akrAccordingToPlan} disabled />
            <input className="grid-item" value={data.courseProjectAccordingToPlan} disabled />
            <input className="grid-item" value={data.сonsultationsAccordingToPlan} disabled />
            <input className="grid-item" value={data.reviewsAccordingToPlan} disabled />
            <input className="grid-item" disabled value={data.testsAccordingToPlan} />
            <input className="grid-item" disabled value={data.examsAccordingToPlan} />
            <input className="grid-item" disabled value={data.educationalPracticeAccordingToPlan} />
            <input className="grid-item" disabled value={data.productionPracticeAccordingToPlan} />
            <input className="grid-item" disabled value={data.graduationProjectAccordingToPlan} />
            <input className="grid-item" disabled value={data.gekgakAccordingToPlan} />
            <input className="grid-item" disabled value={data.postgraduateAndMasterDegreeAccordingToPlan} />
            <input className="grid-item" disabled value={data.allHoursAccordingToPlan} />
            <div className="grid-item">Всего</div>
            <input className="grid-item" disabled value={data.lectures} />
            <input className="grid-item" disabled value={data.labWork} />
            <input className="grid-item" disabled value={data.practice} />
            <input className="grid-item" disabled value={data.mpc} />
            <input className="grid-item" disabled value={data.akr} />
            <input className="grid-item" disabled value={data.courseProject} />
            <input className="grid-item" disabled value={data.сonsultations} />
            <input className="grid-item" disabled value={data.reviews} />
            <input className="grid-item" disabled value={data.tests} />
            <input className="grid-item" disabled value={data.exams} />
            <input className="grid-item" disabled value={data.educationalPractice} />
            <input className="grid-item" disabled value={data.productionPractice} />
            <input className="grid-item" disabled value={data.graduationProject} />
            <input className="grid-item" disabled value={data.gekgak} />
            <input className="grid-item" disabled value={data.postgraduateAndMasterDegree} />
            <input className="grid-item" disabled value={data.allHours} />
          </div>
        </div>
      </div>
    </div>
  </div>
  ));
};

export default Discipline;
