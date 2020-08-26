import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  job: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 16,
    borderRadius: 4
  },

  jobTitle: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333'
  },

  jobBody: {
    flexDirection: 'row',
  },

  jobBodyLeft: {
    flex: 2
  },

  jobBodyRight: {
    flex: 1,
    marginLeft: 10
  },

  jobBodyTitle: {
    fontSize: 10,
    color: '#707079',
    marginTop: 6
  },

  jobBodyValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },

  jobButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  jobButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976d2'
  }
});

export default styles;
