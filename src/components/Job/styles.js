import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  job: {
    backgroundColor: '#201F24',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden'
  },

  jobTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginHorizontal: 18,
    marginTop: 18,
    color: '#FFF'
  },

  content: {
    padding: 18
  },

  contentTextCompany: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#AEAFB4'
  },

  contentTextLocation: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#686870',
    marginTop: 8
  },

  footer: {
    backgroundColor: '#201F24',
    padding: 18
  },

  footerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#686870',
    marginBottom: 8
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  favoriteButton: {
    backgroundColor: '#2F8EFF',
    width: 46,
    height: 46,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: '#8F6BD6'
  },

  moreButton: {
    backgroundColor: '#373A41',
    flex: 1,
    height: 46,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  moreButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    marginLeft: 16
  }
});

export default styles;
