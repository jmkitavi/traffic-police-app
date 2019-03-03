import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import firebase from 'react-native-firebase'

class AuthLoading extends React.Component {
  componentDidMount() {
    this.checkLoginStatus()
  }
  
  checkLoginStatus = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('check Login Status', user.uid)

        this.props.navigation.navigate('Home')

        return firebase.database().ref('users')
          .on('value', (snapshot) => {
            console.log('get users login status', snapshot)
          })

        // return this.props.navigation.navigate('Home')
      }
      return this.props.navigation.navigate('Auth')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AuthLoading
