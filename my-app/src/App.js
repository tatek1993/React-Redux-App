import React from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';

const store = createStore(applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ghibli Movies Ahoy!</h1>
        {/* <MovieForm />
        <MovieList /> */}
      </div>
    </Provider>
  )
}


