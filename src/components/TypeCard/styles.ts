import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  btnActive: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#C7DEFF',
    backgroundColor: '#F2F8FA',
  },
  btnNormal: {
    borderColor: '#A4AEBE',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 25,
  },
  btnTextActive: {
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#172437',
  },
  btnTextNormal: {
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#A4AEBE',
  },
  photo: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
