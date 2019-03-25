import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import styles from './styles/styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const placeHolderURI = 'https://firebasestorage.googleapis.com/v0/b/police-app-dcc53.appspot.com/o/images%2Fimage-cc31babe-4560-4252-bd0e-776a0bc30317.jpg?alt=media&token=30956ae0-af12-43ab-aba4-edd4a22a1ee6'

const Incident = ({ incident, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(incident)}
      >
      <View style={styles.imageContainer}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: incident.incidentImage || placeHolderURI }}
        />
      </View>
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
    </TouchableOpacity>
  )
}

export default Incident