import * as React from 'react';
import styled from 'styled-components';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import movies from '../../data/movies.json';

type Movie = {
  year: string,
  votes: string,
  title: string,
  runtime: string,
  revenue: string,
  rating: string,
  rank: string,
  metascore: string,
  genre: string[],
  director: string,
  description: string,
  actors: string[],
};

type Props = {};

type State = {
  movies: Movie[],
};

const Separator = styled.View`
  height: 2;
  background-color: #ccc;
`;

class MoviesList extends React.Component<Props, State> {
  state = {
    movies,
  };

  static navigationOptions = {
    title: 'Movies',
  };

  renderItem = ({ item }) => {
    const { title } = item;

    return (
      <TouchableHighlight underlayColor="whitesmoke">
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { movies } = this.state;

    return (
      <View>
        <FlatList
          data={movies}
          renderItem={this.renderItem}
          keyExtractor={item => item.rank}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>
    );
  }
}

export default MoviesList;
