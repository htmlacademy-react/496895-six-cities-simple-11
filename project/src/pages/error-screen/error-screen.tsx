import './error-screen.css';

type TErrorScreenProps = {
  isInner?: boolean;
  text?: string;
  handleButtonClick: () => void;
}

function ErrorScreen({isInner, text, handleButtonClick}: TErrorScreenProps): JSX.Element {
  return (
    <div className={`error-screen${isInner ? ' error-screen--inner' : ''}`}>
      <div className="error-screen__text">{text || 'Failed to load data'}</div>
      <button
        onClick={handleButtonClick}
        className="error-screen__button"
        type="button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorScreen;
