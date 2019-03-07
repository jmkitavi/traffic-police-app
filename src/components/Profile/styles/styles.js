import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
  },
  userInfoContainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 10
  },
  contentTitle: {
    color: 'black',
    fontSize: 18,
    lineHeight: 25,
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