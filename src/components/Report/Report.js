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
  Picker,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native'
import firebase from 'react-native-firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-picker'

import { policeLogo } from '../../assets/images'
import styles from './styles/styles'


const idNumberRegex = /^[a-zA-Z0-9]{8,12}$/
const fullNameRegex = /(\w.+\s).+/
const numberPlateRegex = /^[Kk]{1}[a-zA-Z]{2} \d{3}[a-zA-Z]{0,1}$/

class Report extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Record Incident',
    headerLeft: (
      <Image source={policeLogo} style={{ height: '100%', width: 50, marginHorizontal: 10 }} />
    ),
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10, marginTop: 10 }}
        onPress={navigation.getParam('uploadIncident', {})}
      >
        <MaterialCommunityIcons
          name='publish'
          color='white'
          size={25}
        />
      </TouchableOpacity>
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
      disable: false,
      latitude: '',
      longitude: '',
      avatarSource: null,
      incidentType: '',
      offenderName: '',
      offenderID: '',
      numberPlate: '',
      incidentDescription: '',
      interestedPartiesID: '',
      interestedPartiesPlates: '',
    }
  }

  componentDidMount() {
    // this.requestPermission()
    // this.getLocation()
    this.props.navigation.setParams({
      uploadIncident: this.uploadIncident,
      disable: this.state.disable,
    })
  }

  requestPermission = async () => {
    const locationGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location data is required for reporting incidents.',
        message: 'All incidents require to be geo tagged.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    )
    if (!locationGranted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('You won\'t be able to report incidents without Location data', ToastAndroid.SHORT)
      this.setState({
        disable: true,
      })
    }

    const cameraGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )

    if (!cameraGranted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.show('You won\'t be able to take photos.', ToastAndroid.SHORT)
      this.setState({
        disable: true,
      })
    }
  }

  getLocation = () => {
    return navigator.geolocation.getCurrentPosition((position) => {
      console.log('current pos', position)
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => {
      console.log('error pos', error)
      this.setState({ error: error.message })
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
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
      if (response.didCancel) {
        ToastAndroid.show('You did not select an image', ToastAndroid.SHORT)
      } else if (response.error) {
        ToastAndroid.show('Error while selecting image. \n Try again.', ToastAndroid.SHORT)
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


  uploadIncident = () => {
    // if (this.state.disable) {
    //   return ToastAndroid.show('Location data is required for reporting incidents.\nGo to Settings and authorize permissions.', ToastAndroid.LONG)
    // }
    const uri = this.state.avatarSource
    if (this.state.incidentType.length < 3) {
      return ToastAndroid.show('Please Select Incident Type', ToastAndroid.SHORT)
    }
    if (!fullNameRegex.test(this.state.offenderName)) {
      return ToastAndroid.show('Enter at least 2 names', ToastAndroid.SHORT)
    }
    if (!idNumberRegex.test(this.state.offenderID)) {
      return ToastAndroid.show('Please Enter Valid ID Number', ToastAndroid.SHORT)
    }
    if (!numberPlateRegex.test(this.state.numberPlate)) {
      return ToastAndroid.show('Please Enter Valid ID Number', ToastAndroid.SHORT)
    }
    if (this.state.incidentType.split(' ').length < 1) {
      return ToastAndroid.show('Please Select Incident Type', ToastAndroid.SHORT)
    }

    return firebase.storage().ref('images/').child(this.state.fileName).putFile(uri)
      .then((snapshot) => {
        const imageUrl = snapshot.downloadURL

        firebase.database().ref('incidents/').push({
          incidentImage: imageUrl,
          incidentType: this.state.incidentType,
          offenderName: this.state.offenderName,
          offenderID: this.state.offenderID,
          numberPlate: this.state.numberPlate,
          incidentDescription: this.state.incidentDescription,
          interestedPartiesID: this.state.interestedPartiesID,
          interestedPartiesPlates: this.state.interestedPartiesPlates,
        })

        return this.props.navigation.navigate('Home')
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
                size={26}
                color='grey'
                style={{ marginHorizontal: 5 }}
              />
              <View>
                <Text style={styles.topInfoText}>Use this form to record incidents.</Text>
                <Text style={styles.topInfoText}>Ensure to input all required fields correctly.</Text>
              </View>
            </View>

              {this.state.avatarSource !== null &&
                <Image
                  source={{ uri: this.state.avatarSource }}
                  style={{ width: '100%', height: 200, width: '95%', alignSelf: 'center' }}
                  resizeMethod='scale'
                />
              }
            <View style={styles.contentContainer}>
              <TouchableOpacity
                  style={[styles.button, this.state.disable && backgroundColor: 'rgb(23, 29, 89, 0.4)']}
                  onPress={() => this.selectPhotoTapped()}
                >
                <Text style={styles.buttonText}>{this.state.avatarSource === null ? 'TAKE PHOTO' : 'CHANGE PHOTO'}</Text>
              </TouchableOpacity>


              <View style={styles.inputContainer}>
                <Picker
                  selectedValue={this.state.incidentType}
                  style={[styles.input, styles.inputPicker]}
                  onValueChange={(itemValue) => this.setState({ incidentType: itemValue })}
                >
                  <Picker.Item label='Select Incident Type...' value='' />
                  <Picker.Item label='Accident' value='Accident' />
                  <Picker.Item label='Speeding Violation' value='Speeding Violation' />
                  <Picker.Item label='DUI' value='DUI' />
                  <Picker.Item label='Safety Regulations' value='Safety Regulations' />
                  <Picker.Item label='PSV Offences' value='PSV Offences' />
                  <Picker.Item label='Documentation' value='Documentation' />
                  <Picker.Item label='Other' value='Other' />
                </Picker>
                <Text style={styles.inputInfoText}> * Required</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder='Offender Name'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ offenderName: text })}
                />
                <Text style={styles.inputInfoText}> * Required</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder='Offender ID'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ offenderID: text })}
                />
                <Text style={styles.inputInfoText}> * Required</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder='Number Plate'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ numberPlate: text })}
                />
                <Text style={styles.inputInfoText}> * Required</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText, { height: 80, textAlignVertical: 'top'}]}
                  placeholder='Incident Description'
                  underlineColorAndroid='transparent'
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={(text) => this.setState({ incidentDescription: text })}
                />
                <Text style={styles.inputInfoText}> * Required</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder='Interested Parties (ID)'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ interestedPartiesID: text })}
                />
                <Text style={styles.inputInfoText}> * Enter comma separated values</Text>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputText]}
                  placeholder='Interested Parties (Plates)'
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => this.setState({ interestedPartiesPlates: text })}
                />
                <Text style={styles.inputInfoText}> * Enter comma separated values</Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.uploadIncident()}
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
