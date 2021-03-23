import {signInAction} from './actions'
import {push} from 'connected-react-router'
import {auth, db, FirebaseTimestamp} from '../../firebase/index'

export const signIn = (email, password) => {
  return async (dispatch) => {
    if (email === '' || password === '') {
      alert('空欄をご入力ください');
      return false;
    }
    return auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          const uid = user.uid
          db.collection('users').doc(uid).get()
            .then(snapshot => {
              const data = snapshot.data();
              dispatch(signInAction({
                uid: uid,
                username: data.username,
                role: data.role
              }));
              dispatch(push('/'));
            })
        }
      })
  }
}

export const signUp = (username, email, password, password_confirmation) => {
  return async (dispatch) => {
    // Validations
    if (username === '' || email === '' || password === '' || password_confirmation === '') {
      alert('必須項目をご入力ください');
      return false
    }
    if (password !== password_confirmation) {
      alert('パスワードが一致しませんでした。');
      return false
    }
    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user
        const uid = user.uid
        const initialUserData = {
          uid: uid,
          email: email,
          role: 'customer',
          username: username,
          created_at: FirebaseTimestamp.now(),
          updated_at: FirebaseTimestamp.now()
        }
        db.collection("users").doc(uid).set(initialUserData)
          .then(() => {
            dispatch(push('/'));
          })
      })
  }
}