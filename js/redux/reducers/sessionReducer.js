import { LOADING_RESOURCE, DONE_LOADING } from './../actions/loadingActions';
import { UPDATE_SESSION } from './../actions/sessionActions';
import { formatSessionData } from './../../lib/dataFormatHelpers';

export const sessionReducer = (state = { sessionData: {dataBlob: {}, sectionIds: [], rowIds: [] } }, action) => {
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