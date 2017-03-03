import { loadResource, doneLoading } from './loadingActions'

//Session Actions
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const updateSession = session => ({ type: UPDATE_SESSION, payload: session });

//Session Action Creator
export const fetchSession = () => {
  return (dispatch) => {
    const data = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateSession(result));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

