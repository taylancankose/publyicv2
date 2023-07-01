import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import {HeroImage} from '../../../assets';
import styles from './styles';
import themes from '../../theme/variants';
import {ThemeContext} from '../../context/ThemeContext';
import {AuthContext} from '../../context/AuthContext';

const Header = () => {
  const {theme}: any = useContext(ThemeContext);
  const {colors} = themes[theme];
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.innerContainer}>
      <View>
        <Text
          style={[
            styles.title,
            {
              color: colors.header1,
            },
          ]}>
          Discover
        </Text>
        <Text
          style={[
            styles.subTitle,
            {
              color: colors.header2,
            },
          ]}>
          the popular places
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <Image source={{uri: user.photoURL}} style={styles.profilePhoto} />
      </View>
    </View>
  );
};

export default Header;
