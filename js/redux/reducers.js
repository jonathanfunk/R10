import { NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers } from 'redux';
import { UPDATE_CODE_OF_CONDUCT } from './actions'


const codeOfConductReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CODE_OF_CONDUCT:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  codeOfConduct: codeOfConductReducer,
  // other reducers
})

export default rootReducer;