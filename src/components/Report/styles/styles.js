import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  topInfoText: {
    color: 'grey',
    fontSize: 13,
    lineHeight: 14,
},
  contentContainer: {
    width: '95%',
    padding: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.4)',
  },
  inputContainer: {
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
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
  button: {
    width: '50%',
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(23, 29, 89)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
})

export default styles
