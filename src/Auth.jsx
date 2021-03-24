import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getIsSignedIn} from './reducks/users/selector';
import {listenAuthState} from './reducks/users/operations';

const Auth = ({children}) => {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const isSignedIn = getIsSignedIn(selector);

  if (isSignedIn) {
    return children;
  } else {
    dispatch(listenAuthState());
    return <></>
  }
}

export default Auth;