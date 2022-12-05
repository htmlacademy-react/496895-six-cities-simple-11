import './loading.css';

type TLoadingProps = {
  text?: string;
  isInner?: boolean;
}

function Loading({text, isInner}: TLoadingProps): JSX.Element {
  return (
    <div className={`loading${isInner ? ' loading--inner' : ''}`}>
      <p> {text || 'Loading'} ...</p>
    </div>
  );
}

export default Loading;
