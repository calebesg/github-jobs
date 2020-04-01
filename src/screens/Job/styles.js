import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: 'relative',
    backgroundColor: '#f5f5f5'
  },

  job: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 16,
    borderRadius: 4
  },

  jobHeader: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#333'
  },

  jobBody: {
    flexDirection: 'row',
  },

  jobBodyLeft: {
    flex: 1
  },

  jobBodyRight: {
    flex: 1,
    marginLeft: 10
  },

  jobTitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 10
  },

  jobValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },

  jobButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 4,
    backgroundColor: '#24292eee'
  },

  jobButtonText: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff'
  },

  formTech: {
    position: 'absolute',
    bottom: -55,
    left: 20,
    right: 20,
    zIndex: 5
  },

  seachContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    paddingBottom: 70,
    paddingTop: 5
  },

  searchInput: {
    flex: 1,
    marginRight: 10,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
    borderRadius: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },

  searchButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#24292e',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
