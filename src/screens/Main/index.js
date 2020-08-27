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

function Main() {
  const [techList, setTechList] = useState([]);
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(true);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  async function loadTechs() {
    
    setLoading(true);
      
    const response = await api.get(`?description=${search}&page=0`);
    
    setTechList(response.data);

    setLoading(false);
  }

  useEffect(() => {loadTechs()}, []);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    /*
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setIsFiltersVisible(false);

    setTeachers(response.data);
    */
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
              value={search}
              onChangeText={text => setSearch(text)}
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
            data={techList}
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

export default Main;
