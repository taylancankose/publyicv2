import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: width / 3 - 10,
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingsInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontWeight: '500',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: 'lightslategrey',
  },
  reviewText: {
    fontSize: 12,
  },
});
