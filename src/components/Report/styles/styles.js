import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.4)',
  },
  inputContainer: {
    width: '100%',
    // height: 40,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    color: 'black',
    fontSize: 15,
  },
  button: {
    width: '50%',
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#0066ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
})

export default styles
