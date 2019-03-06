import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginBottom: 10,
    elevation: 1,
  },
  imageContainer: {
    height: 160,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: width - 20
  },
  detailsContainer: {
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  incidentType: {
    color: 'black',
    fontSize: 16,
    lineHeight: 18,
  },
  incidentInfo: {
    fontSize: 12,
    color: '#9d9595',
  },
  addButton: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addText: {
    fontSize: 10,
    lineHeight: 12,
  }
})


export default styles