import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  titleContainer: {
    marginVertical: 10,
  },
  placeName: {
    textTransform: 'capitalize',
    fontSize: 24,
    color: '#1f2122',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  address: {
    marginLeft: 5,
  },
  description: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviews: {
    fontSize: 18,
    color: '#1f2122',
    fontWeight: '500',
  },
  reviewNums: {
    fontWeight: '400',
    fontSize: 14,
    alignItems: 'center',
    color: 'gray',
  },
  seeAll: {
    color: 'cornflowerblue',
  },
});
