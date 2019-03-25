import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginBottom: 8,
    elevation: 3,
  },
  imageContainer: {
    height: 180,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: width - 10
  },
  detailsContainer: {
    height: 80,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: '#000033',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
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
})


export default styles