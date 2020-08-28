import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function PageHeader({ title, headerRight, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;
