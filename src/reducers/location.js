import {
  SEARCH_LOCATIONS,
  GET_LOCATION,
  GET_NEARBY,
  CLEAR_SEARCH,
} from '../actions/types';

const initialState = {
  locations: [],
  flag: false,
  foundLocation: null,
  nearby: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_LOCATIONS:
      return {
        ...state,
        locations: payload,
        flag: true,
      };

    case GET_LOCATION:
      return {
        ...state,
        foundLocation: payload,
        flag: false,
      };
    case GET_NEARBY:
      return {
        ...state,
        nearby: payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        locations: [],
        foundLocation: null,
        flag: false,
      };

    default:
      return state;
  }
}
