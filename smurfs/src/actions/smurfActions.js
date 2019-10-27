import axios from "axios";

export const FETCH_SMURF = 'FETCH_SMURF';

export const FETCHED_SMURF_SUCCESS = 'FETCHED_SMURF_SUCCESS';

export const FETCHED_SMURF_ERROR = 'FETCHED_SMURF_ERROR';

export function fetchSmurf() {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURF })

        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: FETCHED_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCHED_SMURF_ERROR, payload: err })
            })
    }
}