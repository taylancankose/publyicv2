import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    elevation: 15,
    position: 'relative',
  },
  imgStyle: {borderRadius: 10},
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 10,
  },
  animationContainer: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 100,
  },
  animation: {
    flex: 1,
    width: 40,
    height: 40,
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
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  },
});
