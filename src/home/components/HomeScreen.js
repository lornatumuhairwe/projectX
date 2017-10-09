import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Body,
  Header,
  Title,
    Content
} from 'native-base';
import Barcode from 'react-native-smart-barcode';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>ProjectX</Title>
          </Body>
        </Header>
        <Content>
          <Text>Barcode</Text>
          <Barcode/>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;

