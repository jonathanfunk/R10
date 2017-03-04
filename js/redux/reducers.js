import { NavigationReducer } from '@exponent/ex-navigation';
import { combineReducers } from 'redux';
import { LOADING_RESOURCE, DONE_LOADING } from './actions/loadingActions';
import { UPDATE_SPEAKERS } from './actions/speakerActions';
import { UPDATE_CODE_OF_CONDUCT } from './actions/codeOfConductActions';
import { UPDATE_SESSION } from './actions/sessionActions';
import { POST_FAVES } from './actions/realmActions';
import { formatSessionData } from './../lib/dataFormatHelpers';
import { formatDataObject } from './../lib/dataFormatHelpers';

const codeOfConductReducer = (state = { loadingResource: false, items: [] }, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true }
    case DONE_LOADING:
      return { ...state, loadingResource: false }
    case UPDATE_CODE_OF_CONDUCT:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const sessionReducer = (state = { sessionData: {dataBlob: {}, sectionIds: [], rowIds: [] } }, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true }
    case DONE_LOADING:
      return { ...state, loadingResource: false }
    case UPDATE_SESSION:
      const sessionData = formatSessionData(action.payload)
      return {...state, sessionData};
    default:
      return state;
  }
};

const speakersReducer = (state = { loadingResource: false, items: {} }, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true }
    case DONE_LOADING:
      return { ...state, loadingResource: false }
    case UPDATE_SPEAKERS:
      const formattedData = formatDataObject(action.payload)
      return { ...state, items: formattedData };
    default:
      return state;
  }
};

const favesReducer = (state = { loadingResource: false, items: [] }, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true }
    case DONE_LOADING:
      return { ...state, loadingResource: false }
    case POST_FAVES:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  codeOfConduct: codeOfConductReducer,
  session: sessionReducer,
  speakers: speakersReducer,
  faves: favesReducer,
  // other reducers
})

export default rootReducer;