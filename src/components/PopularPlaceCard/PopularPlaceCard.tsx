import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import styles from './styles';
import {PlaceContext} from '../../context/PlaceContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const PopularPlaceCard = ({item}) => {
  const [photo, setPhoto] = useState();
  const {API_KEY} = useContext(PlaceContext);
  const navigation = useNavigation();

  useEffect(() => {
    item.photos?.map(e => {
      setPhoto(e.photo_reference);
    });
  }, [item]);

  const handleNavigate = () => {
    navigation.navigate('PlaceDetails', {
      placeID: item.place_id,
      placeName: item.name,
      totalRating: item?.user_ratings_total,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleNavigate}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={styles.container}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo}&key=${API_KEY}`,
        }}>
        <View style={styles.infoContainer}>
          <Text style={styles.placeName}>
            {item.name.length > 16
              ? item.name.substring(0, 16) + '...'
              : item.name}
          </Text>
          <View style={styles.locationContainer}>
            <Icon name="location-outline" size={16} color="white" />
            <Text style={styles.locationText}>
              {item?.vicinity?.split(' ')[0].length > 15
                ? item?.vicinity?.split(' ')[0].substring(0, 15) + '...'
                : item?.vicinity?.split(' ')[0].replace(/,\s*$/, '')}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <AntIcon name="star" size={14} color="#FEB106" />
            <Text style={styles.ratingText}>
              {item.rating}{' '}
              <Text style={styles.reviewText}>
                ({item.user_ratings_total} reviews)
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.overlay} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PopularPlaceCard;
