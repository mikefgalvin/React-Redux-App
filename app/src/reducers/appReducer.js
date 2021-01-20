import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../actions/charActions';


const initialState = {
    characters: [],
    isFetching: false,
    error: '',
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_CHARACTERS):
        return({
          ...state,
          isFetching: true,
          error:'',
          characters:''
        });
      case(FETCH_CHARACTERS_SUCCESS):
        return({
          ...state,
          characters: action.payload,
          isFetching: false,
          error:''
        })
      case(FETCH_CHARACTERS_FAILURE):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        });
      default:
        return state;
    }
  };