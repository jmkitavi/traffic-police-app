import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native'
import firebase from 'react-native-firebase'

import { policeLogo } from '../../assets/images'

class Info extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Information',
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

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000440'
          barStyle='light-content'
        />
        <ScrollView
          contentContainerStyle={{ alignItems: 'flex-start', marginHorizontal: 10, paddingBottom: 10, width: '100%' }}
        >
          <Text style={styles.welcome}>Accident Black Spots</Text>
          <Text style={styles.instructions}>
          {"\n"}{"\n"}NAIROBI PROVINCE
          {"\n"}1. Kasarani G.S.U Stretch
          {"\n"}2. Westlands Museum Roundabout
          {"\n"}3. Westlands Kabete Road
          {"\n"}4. Mombasa Road Between Kencell Hqrs 7 Cabanas
          {"\n"}5. Jogoo Road Near Maziwa Stage
          {"\n"}6. Waiyaki Way Near Kangemi Fly Over

          {"\n"}{"\n"}EASTERN PROVINCE 
          {"\n"}1. Nkubu - Embu Road Section
          {"\n"}2. Konza Junction To Salama Road Section – Mombasa/Nrb At Chumvi Area
          {"\n"}3. Salama - Sultan Hamud Road Section
          {"\n"}4. Emali Simba Market To Kibwezi
          {"\n"}5. Mtito To Tsavo River Stretch
          {"\n"}6. Nanyuki To Isiolo Junction At Subuiga
          {"\n"}7. Machakos - Wamunyu Road Section At Kithangathini
          {"\n"}8. Mlolongo - Small World Club – And Juction To Namaga And At Mto Wa Mawe Bridge

          {"\n"}{"\n"}CENTRAL PROVINCE
          {"\n"}1. Kiganjo - Narumoru Road
          {"\n"}2. Kibirigwi - Sagana Road Section
          {"\n"}3. Limuru - Uplands Section
          {"\n"}4. Thika Blue Post - Sagana Bridge Road Section
          {"\n"}5. Kiriaini – Muranga Road Section
          {"\n"}6. Nyeri – Nyahururu Road
          {"\n"}7. Makongeni (Along Thika – Garissa Road)
          {"\n"}8. Makutano Embu Road
          {"\n"}9. Kiambu – Muthaiga Road

          {"\n"}{"\n"}RIFT VALLEY PROVINCE
          {"\n"}1. Kinungi - Naivasha – Gilgil Toll Station
          {"\n"}2. Gilgil - Mbaruk Road Section
          {"\n"}3. Molo G.S.U Camp - Salgaa
          {"\n"}4. Salgaa To A.D.C. Farm Section
          {"\n"}5. Timboroa - Burnt Forest Section
          {"\n"}6. Chepsir - Kipkelion Junction
          {"\n"}7. Kericho - Litein Road Section
          {"\n"}8. Kericho - Kaitui Section
          {"\n"}9. Endebes Eldoret Road Section
          {"\n"}10. Nanyuki Isiolo Junction
          {"\n"}11. Nyeri – Nyahururu Wiyumiririe Area
          {"\n"}12. Gilgil Nakuru Road Kasambara Area

          {"\n"}{"\n"}COAST PROVINCE
          {"\n"}1. Tsavo – Maungu – Voi Road Section
          {"\n"}2. Wundanyi - Mwatate Road Section
          {"\n"}3. Maungu - Tsavo East Gate Road Section
          {"\n"}4. Maktau - Taveta Road Section
          {"\n"}5. Mazeras Miritini Road Section
          {"\n"}6. Rabai Ribe Road Section
          {"\n"}7. Kaloleni Dzitsoni Road Section
          {"\n"}8. Kilifi - Vipingo Road Section
          {"\n"}9. Kibarani - Changamwe Makande
          {"\n"}10. Kwale Matuga Junction Road Section
          {"\n"}11. Tembo Disco Area Along Msa – Malindi Road
          {"\n"}12. Kengeleni Traffic Lights
          {"\n"}13. Buxton Traffic Lights
          {"\n"}14. Saba-Saba Lights
          {"\n"}15. Kibarani Area
          {"\n"}16. Sportsman Changamwe Area
          {"\n"}17. Navy Junction Long Lunga- Lunga/Likoni Rd
          {"\n"}18. Shika – Adabu Area
          {"\n"}19. Waa Sec. School Area
          {"\n"}20. Gede Area Along Msa-Malindi Road

          {"\n"}{"\n"}WESTERN PROVINCE
          {"\n"}1. Mbale - Vihiga Road Section
          {"\n"}2. Kakamega Chavakali Road Section
          {"\n"}3. Kakamega - Kisumu – Ilesi Museno
          {"\n"}4. Kakamega – Mumias Rd – Makunga
          {"\n"}5. Kakamega - Webuye – Lubao, Kambi Ya Mwanza Ejinya Corner, Malava Forest
          {"\n"}6. Bungoma – Eldoret – Chemoi
          {"\n"}7. Kitale Webuye – Lugulu Misikhu

          {"\n"}{"\n"}NYANZA PROVINCE
          {"\n"}1. Awasi Ahero Road Section
          {"\n"}2. Kiboswa Kisumu Road Section
          {"\n"}3. Daraja Mbili - Bondo Junction
          {"\n"}4. Oyugis - Katitu Road Section
          {"\n"}5. Migori Kakrao Road
          {"\n"}6. Gucha Bridge
          {"\n"}7. Migori Township
          {"\n"}8. Ogembo Nyanguso Road
          {"\n"}9. Kisii Township Main Road
          {"\n"}10. Mwembe Area Kisii Town
          {"\n"}11. Kisii Daraja Mbili

          {"\n"}{"\n"}NORTH EASTERN PROVINCE
          {"\n"}1. Garissa Madogo - Kbc Station
          {"\n"}2. Modogashe - Habaswein
          {"\n"}3. Ukasi - Bangale
          {"\n"}4. Bangale – Hola Road Junction
          {"\n"}5. Buna - Gurar


          </Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
})

export default Info
