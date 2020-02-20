import { GET_DATA, UPDATE_MOVIES, SET_ERROR } from '../actions/index';

const initialState = {
    movies: [],
    isFetchingData: false,
    error: ""
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: 
            return {
                ...state,
                isFetchingData: true,
                movies: []
            };
        case UPDATE_MOVIES: 
            return {
                ...state,
                movies: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
            default:
                return state;        
    }
};