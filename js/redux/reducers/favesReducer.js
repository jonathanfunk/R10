import { LOADING_RESOURCE, DONE_LOADING } from './../actions/loadingActions';
import { POST_FAVES } from './../actions/realmActions';
import { formatSessionData } from './../../lib/dataFormatHelpers';

export const favesReducer = (state = { sessionData: {dataBlob: {}, sectionIds: [], rowIds: [] } }, action) => {
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true }
    case DONE_LOADING:
      return { ...state, loadingResource: false }
    case POST_FAVES:
      const sessionData = formatSessionData(action.payload)
      return { ...state, sessionData };
    default:
      return state;
  }
};