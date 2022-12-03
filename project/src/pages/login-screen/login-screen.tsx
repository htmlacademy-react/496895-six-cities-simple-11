import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants/constants';
import {useAppSelector} from '../../hooks/useAppSelector';
import {FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/api-actions';
import {TAuthData} from '../../types/types';

function LoginScreen(): JSX.Element {
  const currentCityName = useAppSelector((state) => state.currentCityName);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const dispatch = useAppDispatch();

  const onSubmit = (authData: TAuthData) => {
    dispatch(loginAction(authData));
  };

  const handleLoginInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setLoginValue(evt.target.value);
  };

  const handlePasswordInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      login: loginValue,
      password: passwordValue,
    });
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input onInput={handleLoginInput} className="login__input form__input" type="email" name="email" placeholder="Email" required value={loginValue} />
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input onInput={handlePasswordInput} className="login__input form__input" type="password" name="password" placeholder="Password" required pattern="([0-9].*[A-Za-z])|([A-Za-z].*[0-9])" value={passwordValue} />
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
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
