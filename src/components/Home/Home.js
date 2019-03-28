import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Picker,
  TouchableOpacity,
} from 'react-native'
import firebase from 'react-native-firebase'
import MapView, { Marker } from 'react-native-maps'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FAB from 'react-native-fab'

import { policeLogo } from '../../assets/images'
import Incident from './Incident'
import { mapStyle } from '../../constants/mapStyles'

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Nearby Incidents',
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
      incidents: [],
      mapView: false,
      incidentType: '',
      minZoomLevel: null,
    }
  }

  componentDidMount() {
    firebase.database().ref('incidents')
      .on('value', (snapshot) => {
        this.setState(() => ({ incidents: Object.values(snapshot.val()) }))
      })
  }

  renderIncident = () => {
    if (this.state.incidents > 0) {
      return this.state.incidents.map((item, index) => {
        return (
          <Incident incident={item} key={index}  />
        )
      })
    }
    return <Text>Nothing yet</Text>
  }

  onIncidentPress = (incident) => {
    this.props.navigation.navigate('IncidentDetails', { incident })
  }

  renderMarkers = () => {
    let incidents = this.state.incidents

    if(this.state.incidentType === '') {
      return incidents.map((item) => {
        if (item.location) {
          let { latitude, longitude } = item.location.coords
          return (
            <Marker
              coordinate={{latitude, longitude}}
              onPress={() => this.onIncidentPress(item)}
            />
          )
        }
      })
    }

    return incidents.filter(incident => incident.incidentType === this.state.incidentType)
      .map((item) => {
        if (item.location) {
          let { latitude, longitude } = item.location.coords
          return (
            <Marker
              coordinate={{latitude, longitude}}
              onPress={() => this.onIncidentPress(item)}
            />
          )
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />

        {!this.state.mapView ? (
          <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 10 }}>
            {this.state.incidents.map((item) => <Incident incident={item} onPress={this.onIncidentPress} />)}
          </ScrollView>
        ) : (
          <MapView
            style={{ ...StyleSheet.absoluteFillObject }}
            customMapStyle={mapStyle}
            showBackground={false}
            listenKeyboard
            showsMyLocationButton
            showsUserLocation
            initialRegion={{
              latitude: -1.2942026,
              longitude: 36.8194613,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            // maxZoomLevel={12}
            minZoomLevel={this.state.minZoomLevel}
            onMapReady={() => {
              this.setState({
                minZoomLevel: 8,
              })
            }}
          >
            {this.renderMarkers()}
          </MapView>
        )}

        <FAB
          buttonColor={this.state.mapView ? 'white' : '#000440'}
          iconTextColor={this.state.mapView ?  'black' : 'white'}
          onClickAction={() => this.setState(prevState => ({ mapView: !prevState.mapView }))}
          visible={true}
          iconTextComponent={
          this.state.mapView ?
            <MaterialCommunityIcons name='library-books' size={40} /> :
            <MaterialCommunityIcons name='map-search' size={40} />
          }
        />

        {this.state.mapView &&
          <Picker
            mode='dropdown'
            selectedValue={this.state.incidentType}
            style={{
              position: 'relative',
              elevation: 3,
              marginRight: -240,
              marginBottom: -420,
              height: 40,
              width: 150,
              backgroundColor: 'rgba(255,255,255, 0.9)',
            }}
            onValueChange={(itemValue) => this.setState({ incidentType: itemValue })}
          >
            <Picker.Item label='Filter Incident Type...' value='' />
            <Picker.Item label='Accident' value='Accident' />
            <Picker.Item label='Speeding Violation' value='Speeding Violation' />
            <Picker.Item label='DUI' value='DUI' />
            <Picker.Item label='Safety Regulations' value='Safety Regulations' />
            <Picker.Item label='PSV Offences' value='PSV Offences' />
            <Picker.Item label='Documentation' value='Documentation' />
            <Picker.Item label='Other' value='Other' />
          </Picker>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Home
