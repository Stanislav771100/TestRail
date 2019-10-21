import React, { Component } from 'react'
import { Container, Header, Tab, Tabs, TabHeading, Footer } from 'native-base'
import Projects from './Projects'
import Active from './Active'
import Icon from 'react-native-vector-icons/FontAwesome'
import Customizations from './Customizations'
import {
  StyleSheet
} from 'react-native'
export default class Main extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Tabs tabBarPosition='bottom' tabBarUnderlineStyle={styles.underlineStyle}>
          <Tab style={styles.main} heading={<TabHeading style={styles.tabBar}><Icon color='#2bcccc' size={25} name='connectdevelop' /></TabHeading>}>
            <Projects />
          </Tab>
          <Tab style={styles.main} heading={<TabHeading style={styles.tabBar}><Icon color='#2bcccc' size={25} name='fire' /></TabHeading>}>
            <Active />
          </Tab>
          <Tab style={styles.main} heading={<TabHeading style={styles.tabBar}><Icon color='#2bcccc' size={25} name='star' /></TabHeading>}>
            <Customizations />
          </Tab>
        </Tabs>
        <Footer style={styles.footer} />
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202121'
  },
  header: {
    backgroundColor: 'black',
    height: 30
  },
  main: {
    backgroundColor: '#202121'
  },
  footer: {
    height: 1,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderColor: '#2bcccc'
  },
  tabBarText: {
    color: 'white'
  },
  tabBar: {
    backgroundColor: 'black',
    color: 'white'
  },

  tabStyle: {
    backgroundColor: 'black'
  },
  scrollStyle: {
    height: 0

    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal'

  },
  underlineStyle: {
    height: 2,
    backgroundColor: '#2bcccc',
    borderRadius: 3

  }
})
