import React, {useState, useCallback} from 'react';
import {PrimaryButton,TextInput} from '../components/UIkit';
import {signIn} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, [setEmail])

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword])

  return (
    <div>
      <h1>Sign IN</h1>
      <TextInput
        fullWidth={true} required={true} label={"メールアドレス"} multiline={false}
        rows={1} value={email} type={"email"} onChange={inputEmail}
      />
      <TextInput
        fullWidth={true} required={true} label={"パスワード"} multiline={false}
        rows={1} value={password} type={"password"} onChange={inputPassword}
      />
      <PrimaryButton label={"ログインをする"} onClick={() => dispatch(signIn(email, password))} />
    </div>
  )
}

export default SignIn;