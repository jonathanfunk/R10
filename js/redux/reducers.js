  import { NavigationReducer } from '@exponent/ex-navigation';
  import { combineReducers } from 'redux';
  
  const rootReducer = combineReducers({
    navigation: NavigationReducer,
    // other reducers
  })

  export default rootReducer;