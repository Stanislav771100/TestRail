/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  ImageBackground
} from 'react-native';
import LoadScreen from './services/LoadScreen'
import { Container, Text } from 'native-base';
import Main from './components/Main'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor (props) {
    super(props)
    LoadScreen.load(b => this.setState({loaded: true}))

    }
  
  render(){
  return (
    <>
       {this.state.loaded ?  <Main /> : <ImageBackground source={require('./images/4.gif')} style={{width: '100%', height: '100%'}} />} 

    </>
  );
};
}


