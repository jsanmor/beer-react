import { FETCH_BEERS } from '../actions/types';

const initialState = {
  all: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS:
      return {
        ...state,
        all: action.payload
      };
    default:
      return state;
  }
}
