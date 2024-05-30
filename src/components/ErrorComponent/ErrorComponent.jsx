import Close from '../../assets/images/Close.svg';
import CloseButton from '../../assets/images/Close-bttn.svg';

const ErrorComponent = (props) => {
  const { setIsError } = props;
  return (
    <div className="error-wrapper">
      <img src={Close} alt="error" className="error-image" />
      <div className="error-text">
        <span>Ошибка выполнения</span>
        <span>Пожалуйста, попробуйте еще раз.</span>
      </div>
      <button
        type="button"
        className="error-image-close"
        onClick={() => setIsError(false)}
      >
        <img src={CloseButton} alt="error" />
      </button>
    </div>
  );
};

export default ErrorComponent;
