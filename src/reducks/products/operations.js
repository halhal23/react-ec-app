import {db, FirebaseTimestamp} from '../../firebase/index';
import {push} from 'connected-react-router';

const productRef = db.collection('products');

export const createProduct = (name, discription, category, gender, price) => {
  return async (dispatch) => {
    const ref = productRef.doc()
    const id = ref.id
    const data = {
      id: id,
      name: name,
      discription: discription,
      category: category,
      gender: gender,
      price: price,
      created_at: FirebaseTimestamp.now(),
      updated_at: FirebaseTimestamp.now(),
    }
    productRef.doc(id).set(data)
      .then(result => {
        console.log('商品の作成に成功しました。');
        dispatch(push('/'));
      })
      .catch(error => {
        console.log('商品の作成に失敗してもうた');
        console.error(error);
      })
  }
}