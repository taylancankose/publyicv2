import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height / 2,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    width: width,
  },
  image: {
    width: width,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 3,
    alignSelf: 'center',
  },
  active: {
    color: 'white',
    margin: 3,
    fontSize: 12,
  },
  neutral: {
    color: '#777',
    margin: 3,
    fontSize: 12,
  },
});
