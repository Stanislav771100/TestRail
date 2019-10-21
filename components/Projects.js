import React, { Component } from 'react'
import { Text, View } from 'native-base'
import { getProjects } from '../services/Api'
import {
  StyleSheet
} from 'react-native'

export default class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: [],
      issues: [],
      user: '',
      showCreatedOn: false,
      currentActiveProject: -1
    }
  }

  componentDidMount () {
    getProjects()
      .then(response => {
        response.data.projects.forEach(element => {
          element.isShow = false
        })
        console.log(response.data)
        this.setState({
          projects: response.data.projects
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
    showCreatedOn = () =>{
      this.setState({
        showCreatedOn: !this.state.showCreatedOn
      })
    }
    toggleProjectDescription = (index) => {
      let projects = this.state.projects
     projects[index].isShow = !projects[index].isShow
     this.setState({ projects })
  }
  render () {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.HeaderText}>PROJECTS</Text>
        </View>
        {this.state.projects.map((project, index) => {
          return (
            <View style={styles.profile} key={index}>
              <Text onPress={() => this.toggleProjectDescription(index)} style={styles.projectName}>{project.name}</Text>
              {project.isShow && <Text style={styles.projectData}>{project.created_on}</Text>}
            </View>
          )
        })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  projectData: {
    color: '#FFF'
  },
  projectDisc: {
    color: '#2bcccc'
  },
  projectName: {
    color: '#2bcccc',
    fontSize: 20
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop: 10,

    borderWidth: 1,
    borderColor: '#2bcccc'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#2bcccc',
    marginBottom: 5
  },
  HeaderText: {
    color: '#FFF',
    fontWeight: 'normal',
    fontSize: 30

  }
})
