import * as React from 'react';
import { View, Text } from 'react-native';
import movies from '../../data/movies.json';

type Props = {};

class MoviesList extends React.Component<Props, State> {
  state = {
    movies,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Comment'),
    };
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default MoviesList;
