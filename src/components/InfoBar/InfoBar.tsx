import {View, Text} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const InfoBar = ({place, totalRating}) => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = weekday[new Date().getDay()];

  const todayOpenHours = place?.opening_hours?.weekday_text?.filter(o =>
    o.includes(day),
  );
  const formattedOpenHours =
    todayOpenHours &&
    todayOpenHours[0]
      ?.substring(
        todayOpenHours[0]?.indexOf(' ') + 1,
        todayOpenHours[0]?.length,
      )
      .replace('AM', '')
      .replace('AM', '')
      .replace('PM', '')
      .replace('PM', '')
      .replace(/\s/g, '');
  return (
    <View style={styles.statContainer}>
      {formattedOpenHours ? (
        <View
          style={[
            styles.ratingContainer,
            {
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              borderRightWidth: 0.2,
            },
          ]}>
          <View style={styles.rating}>
            <View style={styles.ratingsInfoContainer}>
              <AntIcon name="clockcircle" size={14} color="#777" />
              <Text
                style={{
                  marginLeft: 5,
                }}>
                Open At
              </Text>
            </View>
            <Text style={styles.ratingText}>{formattedOpenHours}</Text>
          </View>
        </View>
      ) : null}
      <View
        style={[
          styles.ratingContainer,
          !formattedOpenHours
            ? {
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderRightWidth: 0.2,
              }
            : null,
        ]}>
        <View style={styles.rating}>
          <View style={styles.ratingsInfoContainer}>
            <AntIcon name="star" size={14} color="#FEB106" />
            <Text
              style={{
                marginLeft: 5,
              }}>
              Ratings
            </Text>
          </View>
          <Text style={styles.ratingText}>
            {place?.rating}{' '}
            <Text style={styles.reviewText}>({totalRating} reviews) </Text>
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.ratingContainer,
          {
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderLeftWidth: 0.2,
          },
        ]}>
        <View style={styles.rating}>
          <View style={styles.ratingsInfoContainer}>
            <Icon name="ios-wallet" size={18} color="brown" />
            <Text
              style={{
                marginLeft: 5,
              }}>
              Price
            </Text>
          </View>
          <Text style={styles.ratingText}>
            {place?.price_level === 1
              ? '₺'
              : place?.price_level === 2
              ? '₺₺'
              : place?.price_level === 3
              ? '₺₺₺'
              : place?.price_level === 4
              ? '₺₺₺₺'
              : '₺₺₺₺₺'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoBar;
