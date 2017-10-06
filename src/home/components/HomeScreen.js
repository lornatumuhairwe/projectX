import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Body,
  Header,
  Title,
} from 'native-base';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>ProjectX</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default HomeScreen;

