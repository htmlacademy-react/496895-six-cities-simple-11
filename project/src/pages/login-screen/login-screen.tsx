import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import {useAppSelector} from '../../hooks/useAppSelector';
import LoginForm from '../../components/login-form/login-form';

function LoginScreen(): JSX.Element {
  const currentCityName = useAppSelector((state) => state.currentCityName);

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <LoginForm />
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{currentCityName}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginScreen;
