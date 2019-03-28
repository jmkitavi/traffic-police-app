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
import Incident from '../Home/Incident'

const userPlaceholder = 'https://firebasestorage.googleapis.com/v0/b/police-app-dcc53.appspot.com/o/images%2Fimage-0b6f586a-7567-4fd7-bb4c-e4a8dbba6eca.jpg?alt=media&token=2c515d7d-3cfc-4930-8d68-04a4ec8f4cc4'


class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Officer Profile',
    headerLeft: (
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

  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      userIncidents: [],
      incidents: [],
    }
  }

  componentDidMount() {
    this.getUserInfo()
  }

  signOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Auth')
  }

  getUserInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        return firebase.database().ref(`/users/${user.uid}`).once('value')
          .then((snapshot) => {
            const currentUser = snapshot.val()
            this.setState({
              currentUser: currentUser,
            })
            firebase.database().ref('incidents')
              .on('value', (snapshot) => {
                const incidents = Object.values(snapshot.val())
                const userIncidents = incidents.filter(incident => incident.officerUID === currentUser.uid)
                this.setState({
                  incidents: userIncidents,
                })
              })
          })
      }
    })
  }

  onIncidentPress = (incident) => {
    this.props.navigation.navigate('IncidentDetails', { incident })
  }


  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        <ScrollView contentContainerStyle={styles.container}>
          <View elevation={3} style={styles.userInfoContainer}>
            <Image
              resizeMode='cover'
              style={styles.image}
              source={{ uri: this.state.currentUser.profileImage || userPlaceholder }}
            />

            <Text style={styles.userDetails}>{this.state.currentUser.fullName}</Text>
            <Text style={styles.userDetails}>{this.state.currentUser.serviceNumber}</Text>
            <Text style={styles.userDetails}>{this.state.currentUser.email}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signOut()}
            >
              <Text style={styles.buttonText}>LOG OUT</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 8 }}>
            <Text style={styles.contentTitle}>Reported Incidents</Text>
            {this.state.incidents.map((incident, index) => {
                return <Incident incident={incident} key={index} onPress={this.onIncidentPress} />
            })}
          </View>
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default Profile
