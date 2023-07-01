import {Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {PlaceContext} from '../../context/PlaceContext';
import styles from './styles';
import placeHistory from '../../../data/placeHistory';

const TypeCard = ({item}) => {
  const {
    setNearbyPlaces,
    getNearbyPlaces,
    active,
    setActive,
    setSearchPlaceResult,
  } = useContext(PlaceContext);

  const handleSelect = () => {
    if (item.type === 'Recently Visited') {
      setActive(item.type);
      setNearbyPlaces(placeHistory);
    } else {
      setActive(item.type);
      getNearbyPlaces(active);
      setSearchPlaceResult(null);
    }
  };
  return (
    <TouchableOpacity
      disabled={active === item.type && true}
      onPress={handleSelect}
      style={item.type === active ? styles.btnActive : styles.btnNormal}>
      <Image source={item.photo} style={styles.photo} />
      <Text
        style={
          item.type === active ? styles.btnTextActive : styles.btnTextNormal
        }>
        {item.type}
      </Text>
    </TouchableOpacity>
  );
};

export default TypeCard;
