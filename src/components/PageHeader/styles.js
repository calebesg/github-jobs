import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 30,
    backgroundColor: '#17181C'
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 240,
    marginVertical: 40
  }
});

export default styles;
