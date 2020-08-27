import React, { useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import Job from '../../components/Job';
import Load from '../../components/Load';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  function loadFavorites() {
    setLoading(true);

    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritesJobs = JSON.parse(response);

        setFavorites(favoritesJobs);
      }
    });

    setLoading(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <>
      <PageHeader title="Meus Favoritos" />

      <View style={styles.content}>
        <Load loading={!loading} />
        
        <ShimmerPlaceHolder
          style={{height:0}}
          autoRun={true}
          visible={!loading}
        >
          <ScrollView 
            style={styles.listJobs}
            contentContainerStyle={{
              paddingHorizontal: 30,
              paddingBottom: 16,
            }}
          >
            {favorites.map(job => {
              return (
                <Job
                  key={job.id}
                  job={job} 
                  favorited
                />
              );
            })}
          </ScrollView>
        </ShimmerPlaceHolder>
      </View>
    </>
  );
}

export default Favorites;
