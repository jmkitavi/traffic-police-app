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
        return firebase.database().ref(`/users/${user.uid}`).once('value')
          .then((snapshot) => {
            const currentUser = snapshot.val()
            this.props.navigation.navigate('MainNavigator', { currentUser })
          })
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
