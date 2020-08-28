import React from 'react';
import { View } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import styles from './styles';

function Load({ loading }) {
  return (
    <ShimmerPlaceHolder style={{height: 0}} visible={!loading} autoRun={true}>
      <View style={styles.container}>
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.title} 
          autoRun={true}
          colorShimmer={['#373A41', '#25272b', '#373A41']}
        /> 
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.longInfo} 
          autoRun={true}
          colorShimmer={['#373A41', '#25272b', '#373A41']}
        />
        <ShimmerPlaceHolder 
          visible={loading}
          style={styles.shortInfo} 
          autoRun={true}
          colorShimmer={['#373A41', '#25272b', '#373A41']}
        />
        <ShimmerPlaceHolder 
          visible={loading} 
          style={styles.buttom} 
          autoRun={true}
          colorShimmer={['#373A41', '#25272b', '#373A41']}
        />
      </View>
    </ShimmerPlaceHolder>
  );
}

export default Load;
