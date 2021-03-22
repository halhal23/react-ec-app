import {signInAction} from './actions'
import {push} from 'connected-react-router'

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    if (!isSignedIn) {
      const url = 'https://api.github.com/users/halhal23'
      const response = await fetch(url).then(res => res.json()).catch(() => null);
      const username = response.login;
      dispatch(signInAction({
        uid: '234234',
        username: username
      }));
    }
    dispatch(push('/'));
  }
}