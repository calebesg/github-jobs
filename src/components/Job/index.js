import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutilineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';

import styles from './styles';

function Job({ job, updateFavoritesList, favorited }) {
  const [isFavorited, setIsFavorited] = useState(favorited);
  
  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoriteArray = [];

    if (favorites) {
      favoriteArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoriteArray.findIndex(jobItem => {
        return jobItem.id === job.id;
      });

      favoriteArray.splice(favoriteIndex, 1);
      
      setIsFavorited(false);
    } else {

      favoriteArray.push(job);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoriteArray));

    updateFavoritesList();
  }

  return (
    <View style={styles.job}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      
      
      <View style={styles.content}>
        <Text style={styles.contentTextCompany}>{job.company}</Text>
        <Text style={styles.contentTextLocation}>{job.location}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{job.type}</Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {}
            ]}
          >
            { isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutilineIcon} />
            }
            
          </RectButton>
          <RectButton
            onPress={() => Linking.openURL(job.url)}
            style={styles.moreButton}
          >
            <Text style={styles.moreButtonText}>Ver mais</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default Job;
