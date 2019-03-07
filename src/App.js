import React from 'react'
import { StatusBar, View, KeyboardAvoidingView } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Auth from './components/Auth/Auth'
import AuthLoading from './components/AuthLoading/AuthLoading'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Report from './components/Report/Report'
import Info from './components/Info/Info'
import Profile from './components/Profile/Profile'
import IncidentDetails from './components/IncidentDetails/IncidentDetails'

const HomeStack = createStackNavigator(
  {
    Home,
    IncidentDetails,
  },
  {
    initialRouteName: 'Home',
  }
)

const SearchStack = createStackNavigator(
  {
    Search,
    IncidentDetails,
  },
  {
    initialRouteName: 'Search',
  }
)

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name='home' size={30} color={tintColor} />
        },
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name='magnify' size={30} color={tintColor} />
        },
      },
    },
    Report: {
      screen: createStackNavigator({ Report }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <View
              style={{width: 50, height: 50, backgroundColor: 'red', marginTop: -20, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}
            >
              <MaterialCommunityIcons name='lead-pencil' size={30} color={tintColor} />
            </View>
          )
        },
      },
    },
    Info: {
      screen: createStackNavigator({ Info }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name='information-outline' size={30} color={tintColor} />
        },
      },
    },
    Profile: {
      screen: createStackNavigator({ Profile }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialCommunityIcons name='account-circle' size={30} color={tintColor} />
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'gold',
      inactiveTintColor: 'white',
      style: {
        height: 60,
        backgroundColor: '#000440',
      }
    }
  }
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
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />
        
        <AppNavigator />
      </KeyboardAvoidingView>
    )
  }
}

export default App
