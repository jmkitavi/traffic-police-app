import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  userInfoContainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: 'center',
    margin: 10
  },
  userDetails: {
    fontSize: 16,
    lineHeight: 20,
    color: 'black',
    fontFamily: 'CaviarDreamsBold',
  },
  contentTitle: {
    fontSize: 18,
    color: 'black',
    lineHeight: 32,
    paddingLeft: 10,
    fontFamily: 'CaviarDreamsBold',
  },
  itemName: {
    color: 'grey',
    fontSize: 15,
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    backgroundColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 130,
    height: 34,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 17,
  },
  addText: {
    color: 'black',
    fontWeight: 'bold',
  }
})


export default styles