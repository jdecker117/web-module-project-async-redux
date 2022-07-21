import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_FAIL = "FETCH_FAIL"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchStart = (e) => {
    return ({type: FETCH_START})
}

export const fetchSuccess = (zip) => {
    return({ type: FETCH_SUCCESS, payload: zip})
}

export const fetchFail = (errorMessage) => {
    return({ type: FETCH_FAIL, payload: errorMessage})
}

export const getZip = (enteredZip) => {
    return (dispatch) => {
        dispatch(fetchStart(enteredZip))
        axios.get(`https://api.zippopotam.us/us/${enteredZip}`)
        .then(res => {
            dispatch(fetchSuccess(res.data.places[0]))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
    }
}