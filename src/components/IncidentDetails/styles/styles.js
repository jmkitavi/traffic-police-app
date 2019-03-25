import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 100,
  },
  contentContainer: {
    backgroundColor: 'white',
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
  detailsTitle: {
    fontFamily: 'CaviarDreamsBold',
    color: 'white',
    fontSize: 8,
    lineHeight: 8,
  },
  detailsText: {
    fontFamily: 'CaviarDreamsBold',
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000033',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
})


export default styles