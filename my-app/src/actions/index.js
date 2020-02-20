import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios
        .get('https://ghibliapi.herokuapp.com/films')
        .then(res => {
            console.log('this is res', res);
            dispatch({ type: UPDATE_MOVIES, payload: res.data })
        })

        .catch(err => {
            console.error('error fetching data from api. err: ', err);
            dispatch({ type: SET_ERROR, payload: 'error fetching api data' });
        });
};