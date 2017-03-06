import { LOADING_RESOURCE, DONE_LOADING } from './../actions/loadingActions';
import { UPDATE_SPEAKERS } from './../actions/speakerActions';
import { formatDataObject } from './../../lib/dataFormatHelpers';

export const speakersReducer = (state = { loadingResource: false, items: {} }, action) => {
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