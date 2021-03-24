import * as Actions from './actions';
import {initialState} from '../store/initialState';

export const productReducer = (state = initialState.product, action) => {
  switch (action.type) {
    case Actions.CREATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}