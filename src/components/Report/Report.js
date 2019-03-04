import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
} from 'react-native'
import firebase from 'react-native-firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'

import { policeLogo } from '../../assets/images'
import styles from './styles/styles'

class Report extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Record Incident',
    headerLeft: (
      <Image source={policeLogo} style={{ height: '100%', width: 50, marginHorizontal: 10 }} />
    ),
    headerStyle: {
      backgroundColor: '#000440',
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
  })

  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null,
      incidentType: '',
      offenderName: '',
      offenderNationalID: '',
      incidentDescription: '',
      interestedParties: '',
    }
  }

  selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }
        // let blob = { uri: 'data:image/jpegbase64,' + response.data }

        this.setState({
          avatarSource: response.uri,
          fileName: response.fileName,
        })
      }
    })
  }


  uploadImage = () => {
    const uri = this.state.avatarSource
    
    // upload image
    firebase.storage().ref('images/').child(this.state.fileName).putFile(uri)
      .then((snapshot) => {
        const imageUrl = snapshot.downloadURL;

        firebase.database().ref('incidents/').push({
          incidentImage: imageUrl,
          incidentType: this.state.incidentType,
          offenderName: this.state.offenderName,
          offenderNationalID: this.state.offenderNationalID,
          incidentDescription: this.state.incidentDescription,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#e6e6e6'}}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
          <ScrollView>
            <View style={styles.topContainer}>
              <MaterialCommunityIcons
                name='information-outline'
                size={35}
                color='grey'
                style={{ marginHorizontal: 10 }}
              />
              <View>
                <Text>Use this form to record incidents.</Text>
                <Text>Ensure to input all required data correctly.</Text>
              </View>
            </View>

            <View style={styles.contentContainer}>
              {this.state.avatarSource !== null &&
                <Image
                  source={{ uri: this.state.avatarSource }}
                  style={{ width: '100%', height: 200, marginBottom: 10 }}
                  resizeMethod='scale'
                />
              }
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.selectPhotoTapped()}
                >
                  <Text style={styles.buttonText}>{this.state.avatarSource === null ? 'SELECT IMAGE' : 'CHANGE IMAGE'}</Text>
                </TouchableOpacity>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Incident Type'
                  underlineColorAndroid='transparent'
                  autoCapitalize={'characters'}
                  onChangeText={(text) => this.setState({ incidentType: text })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Offender Name'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ offenderName: text })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Offender National ID'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ offenderNationalID: text })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Incident Description'
                  underlineColorAndroid='transparent'
                  keyboardType='email-address'
                  onChangeText={(text) => this.setState({ incidentDescription: text })}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder='Interested Parties'
                  underlineColorAndroid='transparent'
                  keyboardType='email-address'
                  onChangeText={(text) => this.setState({ interestedParties: text })}
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.uploadImage()}
              >
                <Text style={styles.buttonText}>SAVE</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default Report
