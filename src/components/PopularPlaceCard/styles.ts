import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: Dimensions.get('window').width / 2.5,
    marginRight: 15,
    elevation: 15,
    position: 'relative',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 10,
  },
  placeName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    marginLeft: 3,
    fontWeight: '400',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {color: 'white', marginLeft: 4, fontWeight: '600'},
  reviewText: {fontSize: 12, fontWeight: '400'},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
  },
});
