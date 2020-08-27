import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Load from '../../components/Load';
import Job from '../../components/Job';

import styles from './styles';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(true);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  useEffect(() => {
    async function loadJobs() {
    
      setLoading(true);
        
      const response = await api.get(`?page=0`);
      
      setJobs(response.data);
  
      setLoading(false);
    }

    loadJobs();
  }, []);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function onChangeSearch(text) {
    const textLower = text.toLowerCase();

    setSearch(textLower);
  }

  async function handleFiltersSubmit() {
    //loadFavorites();
    if (!search) {
      return;
    }

    setLoading(true);

    const response = await api.get(`?description=${search}`);

    setIsFiltersVisible(false);
    setSearch('');

    setJobs(response.data);

    setLoading(false);
  }

  return (
    <>
      <PageHeader 
        title="GitHub Jobs"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Tecnologia</Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual a tecnologia?"
              placeholderTextColor="#c1bccc"
              autoCorrect={false}
              value={search}
              onChangeText={text => onChangeSearch(text)}
            />

            <RectButton 
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        ) }

      </PageHeader>

      <View style={styles.container}>

        <Load loading={!loading} />
      
        <ShimmerPlaceHolder
          style={{height:0}}
          autoRun={true}
          visible={!loading}
        >
          <FlatList 
            data={jobs}
            style={styles.listJobs}
            keyExtractor={job => String(job.id)}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.6}
            renderItem={({ item: job }) => {
              return (
                <Job job={job} favorited={false} />
              );
            }}
          />
        </ShimmerPlaceHolder>
      </View>
    </>
  );
}

export default JobsList;