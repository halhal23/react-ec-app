import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import {getUserId} from '../reducks/users/selector';
import {getUsername} from '../reducks/users/selector';

const Login = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const uid = getUserId(selector);
  const username = getUsername(selector);
  console.log('selector', selector.users)
  console.log('getUserId', getUserId(selector))
  return (
    <div>
      <h2>ホーム</h2>
      <h2>{uid}</h2>
      <h2>{username}</h2>
      <button onClick={() => dispatch(push('/login'))}>ログインページへ</button>
    </div>
  )
}

export default Login