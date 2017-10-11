/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Container } from 'native-base';
import { AppRegistry } from 'react-native';

import HomeScreen from './src/home/components/HomeScreen';

function projectX() {
  return (
    <Container>
      <HomeScreen />
    </Container>
  );
}

AppRegistry.registerComponent('projectX', () => projectX);
