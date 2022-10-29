import Header from '../../components/header/header';
import './not-found.css'

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <Header />
      <main className="page__main page__main--property">
        <section className="not-found">
          <div className="not-found__container container">
          <div className="not-found__status-wrapper">
              <p><b className="not-found__status">404 Not Found</b></p>
              <a className="not-found__button button" href="/">Homepage</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
