/**
 * @format
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import MoviesList from './components/MoviesList';
import MovieComment from './components/MovieComment';

const App = StackNavigator(
  {
    MoviesList: { screen: MoviesList },
    MovieComment: { screen: MovieComment },
  },
  {
    initialRouteName: 'MoviesList',
  },
);

export default () => <App />;
