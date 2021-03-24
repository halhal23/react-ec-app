import React, {useState, useCallback} from 'react';
import {PrimaryButton, TextInput, SelectBox} from '../components/UIkit';
import {createProduct} from '../reducks/products/operations';
import {useDispatch} from 'react-redux';

const ProductEdit = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(''),
        [discription, setDiscription] = useState(''),
        [category, setCategory] = useState(''),
        [gender, setGender] = useState(''),
        [price, setPrice] = useState('');

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const inputDiscription = useCallback((e) => {
    setDiscription(e.target.value);
  }, [setDiscription]);

  const inputPrice = useCallback((e) => {
    setPrice(e.target.value);
  }, [setPrice]);

  const categories = [
    { id: 'japanese', value: '和食'},
    { id: 'itarian', value: 'イタリアン'},
    { id: 'french', value: 'フレンチ'},
  ]

  const genders = [
    { id: 'man', value: '男性'},
    { id: 'woman', value: '女性'},
    { id: 'nothing', value: 'どちらでもない'},
  ]

  return (
    <div>
      <h1>商品を登録</h1>
      <TextInput
        fullWidth={true} required={true} label={"商品名"} multiline={false}
        rows={1} value={name} type={"text"} onChange={inputName}
      />
      <TextInput
        fullWidth={true} required={true} label={"商品内容"} multiline={false}
        rows={1} value={discription} type={"text"} onChange={inputDiscription}
      />
      <SelectBox
        label="カテゴリ" items={categories} select={setCategory} value={category} required={true}
      />
      <SelectBox
        label="性別" items={genders} select={setGender} value={gender} required={true}
      />
      <TextInput
        fullWidth={true} required={true} label={"価格"} multiline={false}
        rows={1} value={price} type={"number"} onChange={inputPrice}
      />
      <PrimaryButton label={"商品を登録する"} onClick={() => dispatch(createProduct(name, discription, category, gender, price))} />
    </div>
  )
}

export default ProductEdit;