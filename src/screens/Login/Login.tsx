/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {ThemeContext} from '../../context/ThemeContext';
import themes from '../../theme/variants';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '598218265043-mjvpqjsl6sia1pnd3cteatvl6ver59hi.apps.googleusercontent.com',
});

const Login = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const {colors, fonts} = themes[theme];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLogin = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgContainer}
          source={require('../../../assets/bg.jpg')}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Explore the Best Places in your Town
            </Text>
            <Text style={styles.subTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quis, ipsa facilis eligendi
            </Text>
          </View>
          <View style={styles.bgOverlay} />
          <TouchableOpacity
            style={styles.loginBtn}
            activeOpacity={0.9}
            onPress={() => handleLogin().then(() => console.log('logged'))}>
            <Text style={styles.loginBtnTxt}>Login with Google</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Login;
