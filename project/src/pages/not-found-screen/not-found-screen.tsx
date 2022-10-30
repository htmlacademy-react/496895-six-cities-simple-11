import './not-found.css';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found">
      <div className="not-found__container container">
        <div className="not-found__status-wrapper">
          <p><b className="not-found__status">404 Not Found</b></p>
          <a className="not-found__button button" href="/">Homepage</a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundScreen;
