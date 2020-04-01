import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import api from '../../services/api'

import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Job() {
  const [tech, setTech] = useState('')
  const [techList, setTechList] = useState([])

  const navigation = useNavigation()

  async function loadTechs(search = '') {
      
    try {
      const response = await api.get(`?search=${search}`)
      
      setTechList(response.data)
      setTech('')

    } catch (err) {
      console.log('Falha na requisição')
    }
  }

  useEffect(() => {
    loadTechs()
  }, [])

  function navigateToDetail(url) {
    navigation.navigate('Detail', {uri: url})
  }

  function handleSearch() {

    loadTechs(tech)
  }

  return (
    <View style={styles.container}>

      <FlatList 
        data={techList}
        style={styles.listJobs}
        keyExtractor={job => String(job.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: job }) => (
          <View style={styles.job}>
            <Text style={styles.jobHeader}>{job.title}</Text>
            
            <View style={styles.jobBody}>
              <View style={styles.jobBodyLeft}>
                <Text style={styles.jobTitle}>MODALIDADE:</Text>
                <Text style={styles.jobValue}>{job.type}</Text>

                <Text style={styles.jobTitle}>LOCAL:</Text>
                <Text style={styles.jobValue}>{job.location}</Text>
              </View>
              <View style={styles.jobBodyRight}>
                <Text style={styles.jobTitle}>EMPRESA:</Text>
                <Text style={styles.jobValue}>{job.company}</Text>

                <Text style={styles.jobTitle}>SALARIO:</Text>
                <Text style={styles.jobValue}>R$ 2500,00</Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={() => navigateToDetail(job.url)} 
              style={styles.jobButton}
            >
              <Text style={styles.jobButtonText}>Ver Mais</Text>
            </TouchableOpacity>
          </View>
        )}
      />

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

          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <MaterialIcons name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
