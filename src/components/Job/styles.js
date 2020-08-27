import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  job: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden'
  },

  jobTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginHorizontal: 18,
    marginTop: 18,
    color: '#32264d'
  },

  content: {
    padding: 18
  },

  contentTextCompany: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6a6180'
  },

  contentTextLocation: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#6a6180',
    marginTop: 8
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 18
  },

  footerText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
    marginBottom: 8
  },

  buttonsContainer: {
    flexDirection: 'row',
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 46,
    height: 46,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  moreButton: {
    backgroundColor: '#04d361',
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
