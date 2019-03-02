import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import styles from '../styles/styles'

const Login = ({ toggleForm, onChangeText, onPress }) => {
  return (
    <React.Fragment>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Service Email"
            underlineColorAndroid='transparent'
            keyboardType="email-address"
            onChangeText={(text) => onChangeText('loginEmail', text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            underlineColorAndroid='transparent'
            keyboardType="email-address"
            secureTextEntry
            onChangeText={(text) => onChangeText('loginPassword', text)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={toggleForm}
      >
        <Text style={styles.changeFormText}>Do not have an account?</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default Login
