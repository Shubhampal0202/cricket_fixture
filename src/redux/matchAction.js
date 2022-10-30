import axios from 'axios';
import {
    FETCH_MATCH_REQUEST,
    FETCH_MATCH_SUCCESS,
    FETCH_MATCH_FAILURE,
    SET_DATE
} from './matchTypes'

export const setDate = (date) => {
    return {
        type: SET_DATE,
        payload: date
    }
}
export const fetchMatchRequest = () => {
    return {
        type: FETCH_MATCH_REQUEST
    }
}

export const fetchMatchSuccess = (matches) => {
    return {
        type: FETCH_MATCH_SUCCESS,
        payload: matches
    }
}

export const fetchMatchFailure = (error) => {
    return {
        type: FETCH_MATCH_SUCCESS,
        paload: error
    }
}
export const fetchMatches = (date) => {
    const options = {
        method: 'GET',
        url: `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${date}`,
        headers: {
          'X-RapidAPI-Key': 'd2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7',
          'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
        }
      };
    return (dispatch) => {
        dispatch(fetchMatchRequest());
        axios.request(options).then(function (response) {
            const matches = response.data
            console.log(matches);
            dispatch(fetchMatchSuccess(matches))
        }).catch(function (error) {
            console.log(error);
            dispatch(fetchMatchFailure(error.message))
        });
    }
}