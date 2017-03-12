import { loadResource, doneLoading } from './loadingActions';
import { queryFaves } from '../../config/model'

//Faves Actions
export const POST_FAVES = 'POST_FAVES';

//Faves Action Creators
export const postFaves = fave => ({ type: POST_FAVES, payload: fave })

//Fetch Faves Thunk
export const fetchFaves = () => {
  return (dispatch) => {
    dispatch(loadResource())
    const data = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        const queried = queryFaves()
        const filtered = result.filter(session => queried.indexOf(session.session_id) > -1)
        dispatch(postFaves(filtered));
        dispatch(doneLoading())
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};
