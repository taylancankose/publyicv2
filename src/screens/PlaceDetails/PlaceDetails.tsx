import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {PlaceContext} from '../../context/PlaceContext';
import styles from './styles';
import Slider from '../../components/Slider/Slider';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoBar from '../../components/InfoBar/InfoBar';

const PlaceDetails = () => {
  const router = useRoute();
  const {placeID, placeName, totalRating}: any = router.params;
  const {getPlacesDetail, selectPlace}: any = useContext(PlaceContext);

  useEffect(() => {
    getPlacesDetail(placeID);
  }, [placeID, placeName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Slider photos={selectPlace?.result?.photos} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.placeName}>{selectPlace?.result?.name}</Text>
            <View style={styles.locationContainer}>
              <Icon name="location-outline" size={20} color={'gray'} />
              <Text style={styles.address}>
                {selectPlace?.result?.vicinity}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Icon name="ios-call" size={30} color={'cornflowerblue'} />
          </TouchableOpacity>
        </View>
        <InfoBar place={selectPlace?.result} totalRating={totalRating} />
        <Text
          style={{
            paddingHorizontal: 15,
            marginVertical: 10,
          }}>
          {selectPlace?.result?.editorial_summary?.overview}
        </Text>
        <View
          style={{
            paddingHorizontal: 15,
            marginVertical: 10,
            flex: 1,
          }}>
          <Text>Reviews ({selectPlace?.result?.reviews.length})</Text>
          <FlatList
            data={selectPlace?.result?.reviews}
            renderItem={({item}) => <Text key={item.time}>{item.text}</Text>}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
