import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    margin: 7,
    paddingHorizontal: 5,
    height: 300
  },
  imageContainer: {
    height: 300,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: width,
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