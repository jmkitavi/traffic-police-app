import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
} from 'react-native'
import { HeaderBackButton } from 'react-navigation'
import firebase from 'react-native-firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { policeLogo } from '../../assets/images'
import styles from './styles/styles'


const placeHolderURI = 'https://firebasestorage.googleapis.com/v0/b/police-app-dcc53.appspot.com/o/images%2Fimage-cc31babe-4560-4252-bd0e-776a0bc30317.jpg?alt=media&token=30956ae0-af12-43ab-aba4-edd4a22a1ee6'


class IncidentDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Incident Details',
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons
          name='chevron-left'
          color='white'
          size={35}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <Image source={policeLogo} style={{ height: '100%', width: 50, marginHorizontal: 10 }} />
    ),
    headerStyle: {
      backgroundColor: '#000440',
      color: 'white'
    },
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
    },
  })

  render() {
    const incident = this.props.navigation.getParam('incident', {})

    if (!incident) {
      return <Text>Loading</Text>
    }

    return (
      <React.Fragment>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode='cover'
              style={styles.image}
              source={{ uri: incident.incidentImage || placeHolderURI }}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={styles.contentTitle}>{incident.incidentType}</Text>
              <Text>{incident.numberPlate}</Text>
            </View>
            <Text style={styles.itemName}>{incident.incidentDescription}</Text>
            <View>
              <Text style={styles.contentTitle}>Offender</Text>
              <Text style={styles.itemName}>{incident.offenderName}</Text>
              <Text style={styles.itemName}>{incident.offenderID}</Text>
            </View>
            {incident.interestedPartiesID.length > 0 || incident.interestedPartiesPlates.length > 0 &&
              <View>
                <Text style={styles.contentTitle}>Interested Parties</Text>
                <Text style={styles.itemName}>{incident.interestedPartiesID}</Text>
                <Text style={styles.itemName}>{incident.interestedPartiesPlates}</Text>
              </View>
            }
          </View>
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default IncidentDetails
