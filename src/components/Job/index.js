import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

function Job({ job }) {
  
  function navigateToDetail(url) {
    navigation.navigate('Detail', {uri: url});
  }

  return (
    <View style={styles.job}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      
      <View style={styles.jobBody}>
        <View style={styles.jobBodyLeft}>
          <Text style={styles.jobBodyTitle}>MODALIDADE:</Text>
          <Text style={styles.jobBodyValue}>{job.type}</Text>

          <Text style={styles.jobBodyTitle}>LOCAL:</Text>
          <Text style={styles.jobBodyValue}>{job.location}</Text>
        </View>
        <View style={styles.jobBodyRight}>
          <Text style={styles.jobBodyTitle}>EMPRESA:</Text>
          <Image source={{ uri: job.company_logo }} style={{ 
            height: 50, 
            width: 60, 
            resizeMode: 'contain',
            marginTop: 5
          }} />
        </View>
      </View>

      <TouchableOpacity 
        onPress={() => navigateToDetail(job.url)} 
        style={styles.jobButton}
      >
        <Text style={styles.jobButtonText}>Ver Mais</Text>
        <MaterialIcons name="arrow-forward" size={20} color="#1976d2" />
      </TouchableOpacity>
  
    </View>
  );
}

export default Job;
