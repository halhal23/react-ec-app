import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {getUserId, getUsername} from '../reducks/users/selector';
import {signOut} from '../reducks/users/operations';

const Login = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const uid = getUserId(selector);
  const username = getUsername(selector);
  return (
    <div>
      <h2>ホーム</h2>
      <h2>ユーザーID: {uid}</h2>
      <h2>ユーザー名: {username}</h2>
      <button onClick={() => dispatch(push('/signin'))}>ログインページへ</button>
      <button onClick={() => dispatch(signOut())}>ログアウト</button>
    </div>
  )
}

export default Login