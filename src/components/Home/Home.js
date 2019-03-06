import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native'
import firebase from 'react-native-firebase'

import { policeLogo } from '../../assets/images'
import Incident from './Incident'

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


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        
        <ScrollView contentContainerStyle={{ margin: 10 }}>
          {this.state.incidents.map((item) => <Incident incident={item} />)}
        </ScrollView>
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
