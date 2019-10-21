import React, { Component } from 'react'
import { Text, View } from 'native-base'
import { getIssues } from '../services/Api'
import {
  StyleSheet,
  ScrollView
} from 'react-native'

export default class Active extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      issues: [],
      user: ''
    }
  }

  componentDidMount () {
    getIssues()
      .then(response => {
        this.setState({
          issues: response.data.issues
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.HeaderText}>ACTIVE</Text>
        </View>
        <View style={styles.main}>
          <ScrollView>
            {this.state.issues.map((issues, index) => {
              return (

                <View style={styles.issues} key={index}>
                  <Text style={styles.projectName}>{issues.project.name}</Text>
                  <Text style={styles.subject}>{issues.subject}</Text>
                </View>

              )
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  subject: {
    color: '#2bcccc'
  },
  projectName: {
    fontSize: 20,
    color: '#FFF'
  },
  issues: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,

    borderWidth: 1,
    borderColor: '#2bcccc'
  },
  main: {
    height: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#2bcccc'
  },
  HeaderText: {
    color: '#FFF',
    fontWeight: 'normal',
    fontSize: 30

  }
})
