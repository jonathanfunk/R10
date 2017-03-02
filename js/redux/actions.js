//TODO: 
//separate actions into seperate files
//Make loading action

export const UPDATE_CODE_OF_CONDUCT = 'UPDATE_CODE_OF_CONDUCT';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const UPDATE_SPEAKERS = 'UPDATE_SPEAKERS';
export const LOADING_RESOURCE = 'LOADING_RESOURCE'
export const DONE_LOADING = 'DONE_LOADING'

export const updateCodeOfConduct = codeOfConduct => ({ type: UPDATE_CODE_OF_CONDUCT, payload: codeOfConduct });
export const updateSession = session => ({ type: UPDATE_SESSION, payload: session });
export const updateSpeaker = speaker => ({ type: UPDATE_SESSION, payload: speaker });
export const loadResource = () => ({ type: LOADING_RESOURCE })//This will come in handy
export const doneLoading = () => ({ type: DONE_LOADING })


//CODE OF CONDUCT
export const fetchCodeOfConduct = () => {
  return (dispatch) => {
    dispatch(loadResource())//Tell store we're using loadResource
    const data = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateCodeOfConduct(result));
        dispatch(doneLoading())
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

//SESSION
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

//SPEAKER
export const fetchSpeakers = (id) => {
  return (dispatch) => {
    const data = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${id}"`
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateSpeaker(result));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

