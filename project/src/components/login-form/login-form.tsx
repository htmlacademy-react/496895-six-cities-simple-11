import {ChangeEvent, FormEvent, useState} from 'react';
import { PASSWORD_PATTERN } from '../../constants/constants';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/api-actions';
import {TAuthData} from '../../types/types';

function LoginForm(): JSX.Element {
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
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input onInput={handleLoginInput} className="login__input form__input" type="email" name="email" placeholder="Email" required value={loginValue} />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input onInput={handlePasswordInput} className="login__input form__input" type="password" name="password" placeholder="Password" required pattern={PASSWORD_PATTERN} value={passwordValue} />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;
