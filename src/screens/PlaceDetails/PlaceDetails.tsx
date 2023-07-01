import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import {PlaceContext} from '../../context/PlaceContext';
import styles from './styles';
import Slider from '../../components/Slider/Slider';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoBar from '../../components/InfoBar/InfoBar';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

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
        {selectPlace?.result?.editorial_summary?.overview && (
          <Text style={styles.description}>
            {selectPlace?.result?.editorial_summary?.overview}
          </Text>
        )}
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 10,
          }}>
          <View style={styles.reviewContainer}>
            <Text style={styles.reviews}>
              {' '}
              Reviews
              <Text style={styles.reviewNums}>
                {' '}
                ({selectPlace?.result?.reviews.length})
              </Text>
            </Text>
            <TouchableWithoutFeedback>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={selectPlace?.result?.reviews.slice(0, 6)}
            renderItem={({item}) => <ReviewCard item={item} key={item.id} />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
