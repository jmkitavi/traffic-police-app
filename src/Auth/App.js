import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { policeLogo } from '../assets/images'
import LoginForm from './forms/Login'
import SignUpForm from './forms/SignUp'
import styles from './styles/styles'

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const serviceNumberRegex = /^[a-zA-Z0-9]{8,12}$/
const passwordRegex = /^[a-zA-Z0-9]{8,16}$/
const fullNameRegex = /(\w.+\s).+/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      haveAccount: true,
      loginEmail: '',
      loginPassword: '',
      signupServiceNumber: '',
      signupFullName: '',
      signupEmail: '',
      signupPassword: '',
    }
  }

  onChangeText = (stateItem, value) => {
    this.setState({
      [stateItem]: value
    })
  }

  onLoginPress = () => {
    if (!emailRegex.test(this.state.loginEmail)) {
      return ToastAndroid.show('Please Enter Valid Email', ToastAndroid.SHORT)
    }
    if (!passwordRegex.test(this.state.loginPassword)) {
      return ToastAndroid.show('Please Enter Valid Password', ToastAndroid.SHORT)
    }

    return ToastAndroid.show('Valid Login Input', ToastAndroid.SHORT)
  }

  onSignUpPress = () => {
    if (!serviceNumberRegex.test(this.state.signupServiceNumber)) {
      return ToastAndroid.show('Please Enter Valid Service Number', ToastAndroid.SHORT)
    }
    if (!fullNameRegex.test(this.state.signupFullName)) {
      return ToastAndroid.show('Enter at least 2 names', ToastAndroid.SHORT)
    }
    if (!emailRegex.test(this.state.signupEmail)) {
      return ToastAndroid.show('Please Enter Valid Email', ToastAndroid.SHORT)
    }
    if (!passwordRegex.test(this.state.signupPassword)) {
      return ToastAndroid.show('Please Enter Valid Password', ToastAndroid.SHORT)
    }

    return ToastAndroid.show('Valid Sign Up Input', ToastAndroid.SHORT)
  }

  toggleForm = () => {
    this.setState(prevState => ({
      haveAccount: !prevState.haveAccount,
    }))
  }

  renderForm = () => {
    if (this.state.haveAccount) {
      return (
        <LoginForm
          toggleForm={this.toggleForm}
          onChangeText={this.onChangeText}
          onPress={this.onLoginPress}
        />
      )
    }
    return (
      <SignUpForm
        toggleForm={this.toggleForm}
        onChangeText={this.onChangeText}
        onPress={this.onSignUpPress}
      />
    )
  }

  render() {
    return (
      <LinearGradient
        colors={['#000440', '#171d59', '#003399']}
        style={styles.container}
      >
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle="light-content"
        />
        <KeyboardAvoidingView
          enabled
          style={{ flex: 1 }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <Image
              source={policeLogo}
              style={styles.logo}
            />
            <View style={styles.header} >
              <Text style={styles.headerText}>TRAFFIC POLICE INCIDENT {"\n"} REPORT APP</Text>
            </View>
            {this.renderForm()}
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    )
  }
}

export default App
