/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainToolBar from './MainToolBar.js'
import MainPage from './MainPage.js'
import FlatListBasics from './FlatListBasics.js'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1}}>
        <MainToolBar />
        <MainPage navigation={this.props.navigation} />
      </View>
      
    );
  }
}

const psr = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: FlatListBasics }
});

AppRegistry.registerComponent('psr', () => psr);
