import React from 'react'
import { StatusBar, View } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import Auth from './components/Auth/Auth'
import AuthLoading from './components/AuthLoading/AuthLoading'
import Home from './components/Home/Home'

const MainNavigator = createDrawerNavigator(
  {
    Home,
  }
)

const switchNavigator = createStackNavigator(
  {
    AuthLoading,
    Auth,
    Home
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = createAppContainer(switchNavigator)

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />

        <AppNavigator />
      </View>
    )
  }
}

export default App
