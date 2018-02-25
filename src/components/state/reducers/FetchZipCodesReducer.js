import {
    FETCH_ZIPCODES_PENDING,
    FETCH_ZIPCODES_FULFILLED,
    FETCH_ZIPCODES_REJECTED
} from '../actions/ZipCodeActions';


// INITIALIZE STATE

const initialState = {
    zipCodes: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchZipCodesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ZIPCODES_PENDING:
            return {
                ...state,
                zipCodes: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_ZIPCODES_FULFILLED:
            return {
                ...state,
                zipCodes: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_ZIPCODES_REJECTED:
            return {
                ...state,
                zipCodes: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};