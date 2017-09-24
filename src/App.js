import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Form from './form/Formulario';
import Localizacao from './form/localizacao';
import { Screen, Spinner, Examples } from '@shoutem/ui';
//import Form from './Form/GooglePlacesSuggest';

class App extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#eee',
        flex: 1
      }}>
        <Localizacao />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WebDevAlfaAvaliacao', () => App);
