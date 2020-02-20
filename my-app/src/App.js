import React from 'react';
import './App.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import { moviesReducer as reducer } from './reducers/moviesReducer';

import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ghibli Movies Ahoy!</h1>
        <MovieForm />
        <MovieList />
      </div>
    </Provider>
  )
}


