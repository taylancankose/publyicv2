import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {PlaceContext} from '../../context/PlaceContext';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import {types} from '../../../data/types';
import TypeCard from '../../components/TypeCard/TypeCard';
import SearchInput from '../../components/SearchInput/SearchInput';
import Header from '../../components/Header/Header';
import PopularPlaceCard from '../../components/PopularPlaceCard/PopularPlaceCard';
import HotDealsCard from '../../components/HotDealsCard/HotDealsCard';

const Home = () => {
  const navigation = useNavigation();
  const {nearbyPlaces, searchPlaceResult, active} = useContext(PlaceContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const renderPlaceCard = ({item}) => <PlaceCard item={item} />;
  const renderPopularCard = ({item}) => <PopularPlaceCard item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />

      <View style={styles.cardContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={types}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TypeCard item={item} />}
        />
      </View>

      <View style={styles.bottomContainer}>
        {!searchPlaceResult ? (
          <View style={{flex: 1}}>
            <View style={styles.hotDealsContainer}>
              <Text style={styles.hotDealsTitle}>{`Hot Deals`}</Text>
              <HotDealsCard />
            </View>
            <View style={styles.nearbyContainer}>
              <View style={styles.nearbyTitleContainer}>
                <Text style={styles.nearbyTitle}>{`Nearby ${active}s`}</Text>
                <TouchableWithoutFeedback
                  onPress={() => console.log('pressed')}>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableWithoutFeedback>
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={nearbyPlaces?.results.slice(0, 6)}
                renderItem={renderPopularCard}
              />
            </View>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <FlatList
              nestedScrollEnabled={true}
              data={searchPlaceResult?.results}
              renderItem={renderPlaceCard}
              numColumns={2}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
