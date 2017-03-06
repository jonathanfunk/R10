import { LOADING_RESOURCE, DONE_LOADING } from './../actions/loadingActions';
import { UPDATE_CODE_OF_CONDUCT } from './../actions/codeOfConductActions';

export const codeOfConductReducer = (state = { loadingResource: false, items: [] }, action) => {
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