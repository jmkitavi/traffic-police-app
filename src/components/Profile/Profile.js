import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
  View,
  StatusBar,
} from 'react-native'
import firebase from 'react-native-firebase'

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        <Text style={styles.welcome}>Welcome to Profile!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Profile
