import { FETCH_SMURF, FETCHED_SMURF_SUCCESS, FETCHED_SMURF_ERROR } from '../actions/smurfActions';


const initialState = {
    smurf: [],
    isLoading: false,
    error: null,
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case FETCH_SMURF:
            return {
                ...state,
                isLoading: true
            }
        case FETCHED_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                isLoading: false
            }
        case FETCHED_SMURF_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}