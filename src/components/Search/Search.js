import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import firebase from 'react-native-firebase'

import { policeLogo } from '../../assets/images'
import styles from './styles/styles'

const placeHolderURI = 'https://firebasestorage.googleapis.com/v0/b/police-app-dcc53.appspot.com/o/images%2Fimage-cc31babe-4560-4252-bd0e-776a0bc30317.jpg?alt=media&token=30956ae0-af12-43ab-aba4-edd4a22a1ee6'

class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Search Incidents',
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
      searchText: '',
    }
  }

  componentDidMount() {
    firebase.database().ref('incidents')
      .on('value', (snapshot) => {
        this.setState(() => ({ incidents: Object.values(snapshot.val()) }))
      })
  }

  filterSearch = (arr, searchKey) => {
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(searchKey.toLowerCase())));
  }

  renderIncident = () => {
    if (this.state.incidents > 0) {
      return filterSearch(this.state.incidents, this.state.searchText).map((item, index) => {
        return (
          <View>
            <Text>{item.incidentType}</Text>
          </View>
        )
      })
    }
    return <Text>Nothing yet</Text>
  }

  onIncidentPress = (incident) => {
    this.props.navigation.navigate('IncidentDetails', { incident })
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />

        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.inputText]}
              placeholder='Search...'
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ searchText: text })}
            />
            <Text style={styles.inputInfoText}>* Search using name, id, number plate</Text>
          </View>
          <View style={{ padding: 2 }}>
            {this.filterSearch(this.state.incidents, this.state.searchText).map((incident, index) => {
              return (
                <TouchableOpacity
                  onPress={() => this.onIncidentPress(incident)}
                >
                  <View elevation={5} style={styles.incidentContainer}>
                    <View>
                      <Image
                        resizeMode='cover'
                        source={{ uri: incident.incidentImage || placeHolderURI }}
                        style={styles.image}
                      />
                    </View>
                    <View style={{ margin: 5, flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View>
                        <Text style={{ fontWeight: 'bold', lineHeight: 25 }}>{incident.incidentType}</Text>
                        <Text style={{ lineHeight: 25 }}>{incident.numberPlate}</Text>
                      </View>
                      <View>
                        <Text style={{ fontWeight: 'bold', lineHeight: 25}}>{incident.offenderName}</Text>
                        <Text style={{ lineHeight: 25 }}>{incident.offenderID}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default Search
