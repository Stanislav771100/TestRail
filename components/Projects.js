import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab, Text, View } from 'native-base';
import { getProjects, getIssues } from '../services/Api'

export default class Projects extends Component {
    constructor (props) {
        super(props)
        this.state = {
          projects: [],
          issues: [],
          apiKey: ''
    
        }
      }
    componentDidMount () {
        getProjects()
          .then(response => {
            console.log('123')
            this.setState({
              projects: response
              
            })
            console.log(response)
          })
          .catch(error => {
            console.dir(error)
          })
          console.log(this.state.projects)
        
      }
  render() {
      
    return (
<View>
    <Text>Projects</Text>
</View>
    );
  }
}