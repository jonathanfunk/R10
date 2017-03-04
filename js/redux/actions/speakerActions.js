import { loadResource, doneLoading } from './loadingActions'

//Speakers Actions
export const UPDATE_SPEAKERS = 'UPDATE_SPEAKERS';
export const updateSpeaker = speaker => ({ type: UPDATE_SPEAKERS, payload: speaker });


//Speakers Action Creator
export const fetchSpeakers = (id) => {
  console.log('ID is...', id);
  return (dispatch) => {
    dispatch(loadResource())//Tell store we're using loadResource
    const data = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${id}"`;
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateSpeaker(result));
        dispatch(doneLoading())
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

