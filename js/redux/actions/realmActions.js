import { loadResource, doneLoading } from './loadingActions';
import { queryFaves } from '../../config/model'

console.log('query faves is...', queryFaves)

export const POST_FAVES = 'POST_FAVES';
export const ADD_FAVES = 'ADD_FAVES';
export const DELETE_FAVES = 'DELETE_FAVES';


export const postFaves = fave => ({ type: POST_FAVES, payload: fave })
export const addFave = id => ({ type: POST_FAVES, payload: id })
export const deleteFave = fave => ({ type: POST_FAVES, payload: id })

//Session Action Creator
export const fetchFaves = () => {
  return (dispatch) => {
    const data = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        const filtered = result.filter(id => queryFaves().include(id.session_id))
        dispatch(postFaves(filtered));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};
