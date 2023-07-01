import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btn: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeImg: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  infoContainer: {
    marginVertical: 5,
    marginHorizontal: 9,
  },
  placeName: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#172437',
  },
  ratingAdressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginHorizontal: 4,
    color: '#78869C',
    fontWeight: '500',
  },
  reviewText: {
    fontSize: 12,
  },
  placeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  placeTypeText: {
    textTransform: 'capitalize',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    marginLeft: 3,
    fontSize: 12,
  },
  priceText: {
    fontWeight: 'bold',
    color: '#468EFB',
  },
});
