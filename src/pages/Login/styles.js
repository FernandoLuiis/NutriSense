import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 175,
    height: 175,
    marginBottom: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 50,
    color: '#181818',
    fontWeight: 'bold',
  },
  sub_titulo: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%', // Ajusta a largura para manter o tamanho original dos TextInput
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontSize: 16, // Ajusta o tamanho da fonte se necessário
  },
  icon: {
    marginHorizontal: 10, // Ajusta o espaçamento horizontal entre o ícone e o início do TextInput
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  forgotPassword: {
    marginTop: 20,
    color: 'gray',
  },
});
