import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  nearbyContainer: {
    marginBottom: 15,
    flex: 0.58,
  },
  bottomContainer: {flex: 1, margin: 15},
  hotDealsContainer: {
    flex: 0.42,
  },
  hotDealsTitle: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2122',
    marginBottom: 4,
  },
  nearbyTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  nearbyTitle: {
    textTransform: 'capitalize',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2122',
  },
  seeAllText: {
    color: 'orange',
    fontSize: 13,
    fontWeight: '600',
  },
  resultContainer: {flex: 1, marginVertical: 15},
});
