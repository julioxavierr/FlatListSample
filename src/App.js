/**
 * @format
 * @flow
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';

import MoviesList from './components/MoviesList';

const App = StackNavigator(
  {
    MoviesList: { screen: MoviesList },
  },
  {
    initialRouteName: 'MoviesList',
  },
);

export default () => <App />;
