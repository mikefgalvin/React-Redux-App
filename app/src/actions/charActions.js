import axios from 'axios';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';



export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS });
  axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then(res =>
        setTimeout(() => {
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results })
    }, 3000)
    )
    .catch(err => dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err }));
};