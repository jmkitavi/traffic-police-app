import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import styles from '../styles/styles'

const SignUp = ({ toggleForm, onChangeText, onPress }) => {
  return (
    <React.Fragment>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter Service Number'
            underlineColorAndroid='transparent'
            autoCapitalize={'characters'}
            onChangeText={(text) => onChangeText('signupServiceNumber', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter Full Name'
            underlineColorAndroid='transparent'
            onChangeText={(text) => onChangeText('signupFullName', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter Service Email'
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            onChangeText={(text) => onChangeText('signupEmail', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Enter Password'
            underlineColorAndroid='transparent'
            keyboardType='email-address'
            secureTextEntry
            onChangeText={(text) => onChangeText('signupPassword', text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={toggleForm}
      >
        <Text style={styles.changeFormText}>Already have an account?</Text>
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default SignUp
