import axios from "axios";

// fetch actions
export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCHED_SMURF_SUCCESS = 'FETCHED_SMURF_SUCCESS';
export const FETCHED_SMURF_ERROR = 'FETCHED_SMURF_ERROR';


// post actions
export const POSTING_NEW_SMURF = 'POSTING_NEW_SMURF'


export function fetchSmurf() {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURF })

        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: FETCHED_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCHED_SMURF_ERROR, payload: err.response })
            })
    }
}

export const ADD_SMURF = 'ADD_SMURF';

export function addSmurf(newSmurf) {
    return (dispatch) => {
        // dispatch({ type: ADD_SMURF, payload: item })
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            dispatch({ type: FETCHED_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHED_SMURF_ERROR, payload: err.response })
        })
    }
}