import axios from 'axios';

import {
  SEARCH_LOCATIONS,
  GET_LOCATION,
  GET_NEARBY,
  CLEAR_SEARCH,
} from './types';

//Autocomplete API
export const searchLocation = (text) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/autocomplete/MTc0Nzo2Szg1MFZZVlIx/place?q=${text}`
    );

    //console.log(res.data.places);
    dispatch({
      type: SEARCH_LOCATIONS,
      payload: res.data.places,
    });
  } catch (err) {
    console.log(err);
  }
};

//Geocode API
export const getLocation = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/geocode/MTc0Nzo2Szg1MFZZVlIx/place/${id}`
    );

    //console.log(res.data.place);
    dispatch({
      type: GET_LOCATION,
      payload: res.data.place,
    });
  } catch (err) {
    console.log(err);
  }
};

//Nearby API
export const getNearby = (category, longitude, latitude) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/nearby/category/MTc0Nzo2Szg1MFZZVlIx/1/10?longitude=${longitude}&latitude=${latitude}&ptype=${category}`
    );

    //console.log(res.data.Place);
    dispatch({
      type: GET_NEARBY,
      payload: res.data.Place,
    });
  } catch (err) {
    console.log(err);
  }
};

export const clear = () => ({ type: CLEAR_SEARCH });
