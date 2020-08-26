import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

function Load({ loading }) {
  return (
    <ShimmerPlaceHolder style={{height: 0}} visible={!loading} autoRun={true}>
      <View style={styles.container}>
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.title} 
          autoRun={true}
          colorShimmer={['#ebebef88', '#c5c5cf88', '#ebebef88']}
        /> 
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.longInfo} 
          autoRun={true}
          colorShimmer={['#ebebef88', '#c5c5cf88', '#ebebef88']}
        />
        <ShimmerPlaceHolder 
          visible={loading}
          style={styles.shortInfo} 
          autoRun={true}
          colorShimmer={['#ebebef88', '#c5c5cf88', '#ebebef88']}
        />
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.buttom} 
          autoRun={true}
          colorShimmer={['#ebebef88', '#c5c5cf88', '#ebebef88']}
        />
      </View>
    </ShimmerPlaceHolder>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    borderRadius: 4,
    padding: 20,
    marginBottom: 16
  },

  title: {
    height: 15,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20
  },

  longInfo: {
    height: 10,
    width: '80%',
    borderRadius: 10,
    marginBottom: 16
  },

  shortInfo: {
    height: 10,
    width: 100,
    borderRadius: 10,
    marginBottom: 20
  },

  buttom: {
    height: 15,
    width: '100%',
    borderRadius: 10
  }
});

export default Load;
