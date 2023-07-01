import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const RateStar = ({rating}) => {
  const totalStars = 5;
  const gainedStars = rating;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      {Array.from({length: gainedStars}, (x, i) => {
        return <Icon key={i} name="star" size={14} color="#FFA000" />;
      })}
      {Array.from({length: totalStars - gainedStars}, (x, i) => {
        return <Icon key={i} name="staro" size={14} color="#FFA000" />;
      })}
    </View>
  );
};

export default RateStar;
