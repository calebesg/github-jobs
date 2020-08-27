import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function PageHeader({ title, headerRight, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={() => {}}>
          {/*<Image source={backIcon} resizeMode="contain" />*/}
        </BorderlessButton>

        {/*<Image source={logoImg} resizeMode="contain" />*/}
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;
