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

const Item = styled.View`
  padding: 20px 5px;
  background-color: #fff;
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
      <TouchableHighlight onPress={() => this.goToComments(item)}>
        <Item>
          <Text>{title}</Text>
        </Item>
      </TouchableHighlight>
    );
  };

  goToComments = ({ title }: Movie) => {
    const { navigate } = this.props.navigation;

    navigate('MovieComment', { title });
  };

  render() {
    const { movies } = this.state;

    return (
      <View>
        <FlatList
          data={movies}
          renderItem={this.renderItem}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>
    );
  }
}

export default MoviesList;
