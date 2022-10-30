import {
    FETCH_MATCH_REQUEST,
    FETCH_MATCH_SUCCESS,
    FETCH_MATCH_FAILURE,
    SET_DATE
} from './matchTypes'

const initialState = {
    loading: false,
    matches: [],
    error: '',
    date: "10-24-2021"
}
export const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MATCH_REQUEST:
            return { ...state, loading: true, date: "" }
        case FETCH_MATCH_SUCCESS:
            return {
                ...state, matches: action.payload,
                loading: false
            }
        case FETCH_MATCH_FAILURE:
            return {
                ...state, loading: false, error: action.payload
            }
        case SET_DATE:
            return { ...state, date: action.payload }
        default:
            return state;
    }

}