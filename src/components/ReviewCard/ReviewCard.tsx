import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import * as moment from 'moment';
import 'moment/locale/tr';
import RateStar from '../RateStar/RateStar';

const ReviewCard = ({item}) => {
  const formattedDate = moment.unix(item.time).locale('tr').format('L');

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: item.profile_photo_url}}
            style={{
              height: 40,
              width: 40,
              marginRight: 5,
            }}
          />
          <View>
            <Text>{item.author_name}</Text>
            <RateStar rating={item.rating} />
          </View>
        </View>
        <Text>{formattedDate}</Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 10,
        }}>
        {item.text.length > 100 ? item.text.slice(0, 100) + '...' : item.text}
      </Text>
    </View>
  );
};

export default ReviewCard;
