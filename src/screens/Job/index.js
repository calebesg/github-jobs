import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { MaterialIcons } from '@expo/vector-icons'
import api from '../../services/api'

import styles from './styles'

import Load from '../../components/Load'

function Job() {
  const [tech, setTech] = useState('')
  const [techList, setTechList] = useState([])
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)

  const navigation = useNavigation()

  async function loadTechs() {
    
    if (page > 2) {
      return
    }
    
    setLoading(false)
      
    try {
      const response = await api.get(`?page=${page}&search=${tech}`)
      
      setTechList([...techList, ...response.data])
      setTech('')

    } catch (err) {
      console.log('Falha na requisição')
    }

    setPage(page + 1)

    setLoading(true)
  }

  useEffect(() => {
    loadTechs()
  }, [])

  function navigateToDetail(url) {
    navigation.navigate('Detail', {uri: url})
  }

  function handleSearch() {
    loadTechs()
  }

  return (
    <View style={styles.container}>

      <View style={styles.seachContainer}>
        <TextInput 
          style={styles.searchInput}
          value={tech}
          onChangeText={setTech}
          placeholder="Buscar por Tech..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          onSubmitEditing={handleSearch} 
          autoCorrect={false}
        />

        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <MaterialIcons name="search" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <Load loading={loading} />
      <Load loading={loading} />
      <Load loading={loading} />
      <Load loading={loading} />
     
      <ShimmerPlaceHolder
        style={{height:0}}
        autoRun={true}
        visible={loading}
      >
        <FlatList 
          data={techList}
          style={styles.listJobs}
          keyExtractor={job => String(job.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadTechs}
          onEndReachedThreshold={0.2}
          renderItem={({ item: job }) => (

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
                    resizeMode: 'contain' ,
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
          )}
        />
      </ShimmerPlaceHolder>
    </View>
  )
}

export default Job
