import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#cccccc',
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  inputText: {
    color: 'black',
    fontSize: 15,
  },
  inputInfoText: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingLeft: 5,
    color: 'grey',
  },
  incidentContainer: {
    flexDirection: 'row',
    height: 70,
    width: '98%',
    marginBottom: 5,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: 70,
  },
})


export default styles