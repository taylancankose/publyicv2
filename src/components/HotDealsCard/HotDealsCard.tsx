import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import item from '../../../data/hotDeals';
import {PlaceContext} from '../../context/PlaceContext';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const HotDealsCard = () => {
  const [photo, setPhoto] = useState();
  const {API_KEY} = useContext(PlaceContext);
  const navigation = useNavigation();

  const handleDetails = () => {
    navigation.navigate('PlaceDetails', {
      placeID: item.place_id,
      placeName: item.name,
      totalRating: item?.user_ratings_total,
    });
  };

  useEffect(() => {
    item?.photos?.map(e => {
      setPhoto(e.photo_reference);
    });
  }, [item]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.95}
      onPress={handleDetails}>
      <ImageBackground
        imageStyle={styles.imgStyle}
        style={styles.container}
        source={{
          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo}&key=${API_KEY}`,
        }}>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            loop
            style={styles.animation}
            source={require('../../../assets/lottie/deal.json')}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.placeName}>{item?.name}</Text>
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
              {item?.rating}{' '}
              <Text style={styles.reviewText}>
                ({item?.user_ratings_total} reviews)
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.overlay} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HotDealsCard;
