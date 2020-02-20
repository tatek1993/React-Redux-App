import React from 'react';
import { connect } from 'react-redux';

import {getData} from '../actions/index';

const MovieForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <>
        {props.isFetchingData ? (
          <div>we are fetching data</div>
        ) : (
          <button onClick={handleGetData}>Let's see some movies!</button>
        )}
        </>
      );
};

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    {getData}
    )(MovieForm);