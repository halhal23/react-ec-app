import React, {useState, useCallback} from 'react';
import {PrimaryButton,TextInput} from '../components/UIkit';
import {signUp} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [password_confirmation, setPasswordConfirmation] = useState('');

  const inputUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, [setUsername])

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail])

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword])

  const inputPasswordConfirmation = useCallback((e) => {
    setPasswordConfirmation(e.target.value);
  }, [setPasswordConfirmation])


  return (
    <div>
      <h1>Sign UP</h1>
      <p>Welocome to test app.</p>
      <TextInput
        fullWidth={true} required={true} label={"ユーザーネーム"} multiline={false}
        rows={1} value={username} type={"text"} onChange={inputUsername}
      />
      <TextInput
        fullWidth={true} required={true} label={"メールアドレス"} multiline={false}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput
        fullWidth={true} required={true} label={"パスワード"} multiline={false}
        rows={1} value={password} type={"password"} onChange={inputPassword}
      />
      <TextInput
        fullWidth={true} required={true} label={"パスワード（確認用）"} multiline={false}
        rows={1} value={password_confirmation} type={"password"} onChange={inputPasswordConfirmation}
      />
      <PrimaryButton label={"アカウントを登録する"} onClick={() => dispatch(signUp(username, email, password, password_confirmation))} />
    </div>
  )
}

export default SignUp;