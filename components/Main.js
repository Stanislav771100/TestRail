import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Text, ScrollableTab } from 'native-base';
import Projects from './Projects'
import Active from './Active'
import Customizations from './Customizations'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
  } from 'react-native';
export default class Main extends Component {
  render() {
    return (
<Container>
        <Header 
        hasTabs
        style={styles.header}
        />
        <Tabs renderTabBar={()=> <ScrollableTab 
        style={styles.scrollStyle}/>}>
          <Tab heading="Projects">
            <Projects />
          </Tab>
          <Tab heading="Active">
            <Active />
          </Tab>
          <Tab heading="Customizations">
            <Customizations />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    header:{
        height: 20
    },
    tabStyle: {
        
    },
   scrollStyle: {
    height: 50
     // justifyContent: 'center',
   },
   tabBarTextStyle: {
     fontSize: 14,
     fontWeight: 'normal',
   },
   underlineStyle: {
     height: 3,
     backgroundColor: 'red',
     borderRadius: 3,
     width: 15,
   },
 });