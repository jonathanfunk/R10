import { loadResource, doneLoading } from './loadingActions'

//Session Action & Action Creators
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const updateSession = session => ({ type: UPDATE_SESSION, payload: session });

//Fetch Session Thunk
export const fetchSession = () => {
  return (dispatch) => {
    dispatch(loadResource())
    const data = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateSession(result));
        dispatch(doneLoading())
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

