import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#A8B444',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  radius20button: {
    width: '100%',
    alignSelf: 'auto',
    backgroundColor: '#A8B444',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  ensaioContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    alignSelf: 'auto',
    backgroundColor: '#A8B444',
    padding: 10,
    borderRadius: 9,

  },
  ensaioConteinerText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 5,
    fontSize: 16,
  },
  imgSeta: {
    margin: 8,
  },
  containerHome: {
    maxHeight: "100%",
    flex: 1,
    padding: 20,
  },

  containerResultados: {
    flex: 1,
    marginTop: 10,
  },
  ensaioContainerX: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    alignSelf: 'auto',
    backgroundColor: '#C2C2C2',
    margin: 5,
    padding: 10,
    borderRadius: 9,
  },
  textImputEnsaio: {
    textAlign: 'center',
    marginVertical: 5,
    borderRadius: 20,
    padding: 6,
    backgroundColor: '#A0A0A0'
  }


});

export default styles;
