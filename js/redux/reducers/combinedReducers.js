import { NavigationReducer } from '@exponent/ex-navigation';
import { codeOfConductReducer } from './codeOfConductReducer';
import { speakersReducer } from './speakersReducer';
import { sessionReducer } from './sessionReducer';
import { favesReducer } from './favesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  codeOfConduct: codeOfConductReducer,
  session: sessionReducer,
  speakers: speakersReducer,
  faves: favesReducer,
})

export default rootReducer;