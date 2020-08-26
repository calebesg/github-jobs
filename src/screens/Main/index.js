import React, { useState, useEffect } from 'react';
import { 
  View,
  TextInput,
  FlatList,
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import Load from '../../components/Load';
import Job from '../../components/Job';

import styles from './styles';

function Main() {
  const [techList, setTechList] = useState([]);
  const [tech, setTech] = useState('');
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const navigation = useNavigation();

  async function loadTechs() {
    
    if (page > 2) {
      return;
    }
    
    setLoading(false);
      
    try {
      const response = await api.get(`?description=${tech}&page=${page}`);
      
      setTechList([...techList, ...response.data]);
      setTech('');

    } catch (err) {
      console.log('Falha na requisição');
    }

    setPage(page + 1);

    setLoading(true);
  }

  useEffect(() => {
    loadTechs();
  }, []);

  function handleSearch() {
    loadTechs();
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
          onEndReachedThreshold={0.6}
          renderItem={({ item: job }) => <Job job={job} />}
        />
      </ShimmerPlaceHolder>
    </View>
  );
}

export default Main;
