import { StyleSheet, Platform, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 200,
    marginTop: 50,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginContainer: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.4)',
    padding: 15,
    borderRadius: 10
  },
  inputContainer: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
    fontSize: 15,
  },
  button: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#0066ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  changeFormText: {
    color: '#ffcc00',
    fontStyle: 'italic',
  },
})

export default styles
