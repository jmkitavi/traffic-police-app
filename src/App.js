import React from 'react'
import { StatusBar, View } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Auth from './components/Auth/Auth'
import AuthLoading from './components/AuthLoading/AuthLoading'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Report from './components/Report/Report'
import Info from './components/Info/Info'
import Profile from './components/Profile/Profile'



const MainNavigator = createBottomTabNavigator(
  {
    Home: createStackNavigator({ Home }),
    Search: createStackNavigator({ Search }),
    Report: createStackNavigator({ Report }),
    Info: createStackNavigator({ Info }),
    Profile: createStackNavigator({ Profile }),
  },
)

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading,
    Auth,
    MainNavigator
  },
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
