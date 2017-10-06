/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container } from 'native-base';
import { AppRegistry } from 'react-native';

import HomeScreen from './src/home/components/HomeScreen';

export default class projectX extends Component {
  render() {
    return (
      <Container>
        <HomeScreen />
      </Container>
   );
  }
}

AppRegistry.registerComponent('projectX', () => projectX);
