import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    position: 'relative',
  },
  titleContainer: {
    alignItems: 'flex-start',
    padding: 20,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 100,
  },
  title: {
    color: 'white',
    fontSize: 45,
    maxWidth: 300,
    marginBottom: 10,
    zIndex: 100,
  },
  subTitle: {
    color: 'white',
    zIndex: 100,
  },
  loginBtn: {
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'cornflowerblue',
    bottom: 25,
    left: 20,
    right: 20,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  loginBtnTxt: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  bgOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.297)',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
