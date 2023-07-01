import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {PlaceContext} from '../../context/PlaceContext';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PlaceCard = ({item}) => {
  const navigation = useNavigation();
  const {API_KEY, getPlacesDetail} = useContext(PlaceContext);
  const [photo, setPhoto] = useState();
  useEffect(() => {
    item.photos?.map(e => {
      setPhoto(e.photo_reference);
    });
  }, [item]);

  const handleDetails = () => {
    navigation.navigate('PlaceDetails', {
      placeID: item?.place_id,
      placeName: item?.name,
      totalRating: item?.user_ratings_total,
    });
    getPlacesDetail(item.place_id);
  };

  return (
    <View key={item.place_id} style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleDetails}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.placeImg}
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo}&key=${API_KEY}`,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.placeName}>{item.name}</Text>
          <View style={styles.ratingAdressContainer}>
            <View style={styles.addressContainer}>
              <Icon name="location-outline" size={16} color="gray" />
              <Text style={styles.addressText}>
                {item?.formatted_address?.split(' ')[0].length > 15
                  ? item?.formatted_address?.split(' ')[0].substring(0, 15)
                  : item?.formatted_address?.split(' ')[0].replace(/,\s*$/, '')}
                ...
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <AntIcon name="star" size={16} color="#FEB106" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
          <View style={styles.placeInfoContainer}>
            <Text style={styles.placeTypeText}>{item.types[0]}</Text>
            <Text style={styles.priceText}>
              {item.price_level === 1
                ? '₺'
                : item.price_level === 2
                ? '₺₺'
                : item.price_level === 3
                ? '₺₺₺'
                : item.price_level === 4
                ? '₺₺₺₺'
                : '₺₺₺₺₺'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceCard;
