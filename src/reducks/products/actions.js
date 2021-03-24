export const CREATE = 'CREATE';
export const createAction = (productState) => {
  return {
    type: CREATE,
    payload: {
      list: []
    }
    // payload: {
    //   id: productState.id,
    //   name: productState.name,
    //   discription: productState.discription,
    //   gender: productState.gender,
    //   category: productState.category,
    //   price: productState.price
    // }
  }
}