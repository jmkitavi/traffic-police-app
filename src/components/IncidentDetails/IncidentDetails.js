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
import Geocoder from 'react-native-geocoding'

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
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        <View style={styles.imageContainer}>
          <Image
            resizeMode='cover'
            style={styles.image}
            source={{ uri: incident.incidentImage || placeHolderURI }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.detailsContainer}>
            <View>
              <Text style={styles.detailsTitle}>INCIDENT TYPE</Text>
              <Text style={styles.detailsText}>{incident.incidentType.toUpperCase()}</Text>
              <Text style={[styles.detailsTitle, { marginTop: 8 }]}>NUMBER PLATE</Text>
              <Text style={styles.detailsText}>{incident.numberPlate.toUpperCase()}</Text>
            </View>
            <View>
              <Text style={styles.detailsTitle}>OFFENDER NAME</Text>
              <Text style={styles.detailsText}>{incident.offenderName}</Text>
              <Text style={[styles.detailsTitle, { marginTop: 8 }]}>OFFENDER ID</Text>
              <Text style={styles.detailsText}>{incident.offenderID.toUpperCase()}</Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 14, lineHeight: 30 }}>DESCRIPTION</Text>
            <View style={{ borderWidth: .5, borderColor: 'black', borderRadius: 5 }}>
              <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 13, padding: 8 }}>{incident.incidentDescription}</Text>
            </View>
          </View>
          {incident.location.coords &&
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 14, lineHeight: 30 }}>LOCATION</Text>
              <View style={{ borderWidth: .5, borderColor: 'black', borderRadius: 5 }}>
                <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 13, padding: 8 }}>
                  {incident.geoName}
                </Text>
              </View>
            </View>
          }
          {incident.interestedPartiesID.length < 0 || incident.interestedPartiesPlates.length > 0 &&
            <View style={{ marginVertical: 10, borderBottomWidth: .5 }}>
              <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 14, lineHeight: 30 }}>Interested Parties</Text>
              <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 13, padding: 8 }}>ID NUMBER: {incident.interestedPartiesID}</Text>
              <Text style={{ fontFamily: 'CaviarDreamsBold', color: 'black', fontSize: 13, padding: 8 }}>NUMBER PLATE: {incident.interestedPartiesPlates}</Text>
            </View>
          }
          <View style={[styles.detailsContainer, { height: 50 }]}>
            <View>
              <Text style={styles.detailsTitle}>OFFICER NAME</Text>
              <Text style={styles.detailsText}>{incident.officerName}</Text>
            </View>
            <View>
              <Text style={styles.detailsTitle}>OFFICER ID</Text>
              <Text style={styles.detailsText}>{incident.officerNumber.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default IncidentDetails
