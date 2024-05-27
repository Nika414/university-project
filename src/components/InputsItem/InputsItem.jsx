import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeDiscipline } from '../../utils/api';

const InputsItem = (props) => {
  const { data, refetch } = props;
  const navigate = useNavigate();

  const handleDeleteClick = async () => {
    try {
      await removeDiscipline(data.id);
      await refetch();
    } catch (err) { console.log(err); }
  };

  const handleShowMoreClick = () => {
    navigate(`/discipline/${data.id}`);
  };

  return (
    <div className="inputs__item">
      <input className="inputs-item__input" value={data.diciplineName} disabled />
      <input className="inputs-item__input" value={data.allHours} disabled />
      <div className="inputs-item__buttons">
        <button type="button" className="inputs-item__button" onClick={handleDeleteClick}>
          Удалить
        </button>
        <button type="button" className="inputs-item__button" onClick={handleShowMoreClick}>
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default InputsItem;
