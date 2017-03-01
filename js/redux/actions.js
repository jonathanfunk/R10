export const UPDATE_CODE_OF_CONDUCT = 'UPDATE_CODE_OF_CONDUCT';
export const updateCodeOfConduct = codeOfConduct =>
  ({
    type: UPDATE_CODE_OF_CONDUCT,
    payload: codeOfConduct
  });

export const fetchCodeOfConduct = () => {
  return (dispatch) => {
    const data = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(data)
      .then((response) => response.json())
      .then((result) => {
        dispatch(updateCodeOfConduct(result));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

