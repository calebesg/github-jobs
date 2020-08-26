import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },

  seachContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },

  searchInput: {
    flex: 1,
    marginRight: 10,
    height: 40,
    color: '#333',
    fontSize: 14,
  },

  searchButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
