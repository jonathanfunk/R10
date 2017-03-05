import { loadResource, doneLoading } from './loadingActions';
import { queryFaves } from '../../config/model'

export const POST_FAVES = 'POST_FAVES';
export const ADD_FAVES = 'ADD_FAVES';
export const DELETE_FAVES = 'DELETE_FAVES';


export const postFaves = fave => ({ type: POST_FAVES, payload: fave })
export const addFave = id => ({ type: POST_FAVES, payload: id })
export const deleteFave = fave => ({ type: POST_FAVES, payload: id })

//Fetch Action Creator
export const fetchFaves = () => {
  return (dispatch) => {
    dispatch(loadResource())//Tell store we're using loadResource
    const data = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        const queried = queryFaves()
        const filtered = result.filter(x => queried.indexOf(x.session_id) > -1)
        dispatch(postFaves(filtered));
        dispatch(doneLoading())
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};
