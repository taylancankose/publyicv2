import {View, Text, ScrollView, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import {PlaceContext} from '../../context/PlaceContext';

const Slider = ({photos}) => {
  const [active, setActive] = useState(0);
  const {API_KEY}: any = useContext(PlaceContext);

  const changeIndicator = ({nativeEvent}: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={changeIndicator}
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        {photos?.map(photo => {
          return (
            <Image
              key={photo?.photo_reference}
              style={styles.image}
              source={{
                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo?.photo_reference}&key=${API_KEY}`,
              }}
            />
          );
        })}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {photos?.map((i, k) => {
          return (
            <Text key={k} style={k === active ? styles.active : styles.neutral}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default Slider;
