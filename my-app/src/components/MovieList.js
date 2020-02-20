import React from 'react';
import {connect} from 'react-redux';

const MoviesList = props => {
    console.log('movielist props', props);
    return (
        <>
            {props.error ? (
                <div classname="error">{props.error}</div>
            ) : (
                props.movies.map(movie => <div>{movie.title}</div>)
            )}
        </>
    );
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {}
)(MoviesList);