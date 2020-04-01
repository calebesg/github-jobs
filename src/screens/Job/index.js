import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Job() {
  const [tech, setTech] = useState('')
  const [techList, setTechList] = useState([])

  const navigation = useNavigation()


  function navigateToDetail() {
    navigation.navigate('Detail', {uri: 'https://github.com/calebesg'})
  }

  return (
    <View style={styles.container}>
      <View style={styles.listJobs}>

        <View style={styles.job}>
          <Text style={styles.jobHeader}>Software Engginer</Text>
          
          <View style={styles.jobBody}>
            <View style={styles.jobBodyLeft}>
              <Text style={styles.jobTitle}>MODALIDADE:</Text>
              <Text style={styles.jobValue}>Full Time</Text>

              <Text style={styles.jobTitle}>LOCAL:</Text>
              <Text style={styles.jobValue}>Palestina de Goiás</Text>
            </View>
            <View style={styles.jobBodyRight}>
              <Text style={styles.jobTitle}>EMPRESA:</Text>
              <Text style={styles.jobValue}>ACCI</Text>

              <Text style={styles.jobTitle}>SALARIO:</Text>
              <Text style={styles.jobValue}>R$ 2500,00</Text>
            </View>
          </View>

          <TouchableOpacity 
            onPress={() => navigateToDetail()} 
            style={styles.jobButton}
          >
            <Text style={styles.jobButtonText}>Ver Mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.job}>
          <Text style={styles.jobHeader}>Software Engginer</Text>
          
          <View style={styles.jobBody}>
            <View style={styles.jobBodyLeft}>
              <Text style={styles.jobTitle}>MODALIDADE:</Text>
              <Text style={styles.jobValue}>Full Time</Text>

              <Text style={styles.jobTitle}>LOCAL:</Text>
              <Text style={styles.jobValue}>Palestina de Goiás</Text>
            </View>
            <View style={styles.jobBodyRight}>
              <Text style={styles.jobTitle}>EMPRESA:</Text>
              <Text style={styles.jobValue}>ACCI</Text>

              <Text style={styles.jobTitle}>SALARIO:</Text>
              <Text style={styles.jobValue}>R$ 2500,00</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.jobButton}>
            <Text style={styles.jobButtonText}>Ver Mais</Text>
          </TouchableOpacity>
        </View>
       
      </View>


      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={styles.formTech}
      >
        <View style={styles.seachContainer}>
          <TextInput 
            style={styles.searchInput}
            value={tech}
            onChangeText={setTech}
            placeholder="Buscar por Tech..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
          />

          <TouchableOpacity onPress={() => {}} style={styles.searchButton}>
            <MaterialIcons name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
