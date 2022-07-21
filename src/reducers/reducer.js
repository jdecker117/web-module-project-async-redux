import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions/actions";

const initialState = {
    zipCode : {
        "place name": "Winter Springs",
        state: "FL"
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                zipCode: {},
                isFetching: true,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                zipCode: {},
                isFetching: false,
                error: action.payload
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                zipCode: action.payload,
                isFetching: false,
                error: ''
            }
        default: 
            return state;
    }
}