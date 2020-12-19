import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  TextInput,
  Platform,
  ToastAndroid,
  Keyboard,
  Image,
  Alert,
  ImageBackground,
  AsyncStorage,
  PermissionsAndroid,
  BackHandler,
  Switch,
  Animated,
} from 'react-native';
import config from '../config';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';

var isHidden = true;

const Swipers = (props) => {
  const theme = useTheme();
  return (
    <View style={styles.wrapper2}>
      <Swiper
        contentContainerStyle={{justifyContent: 'center'}}
        style={styles.wrapper}
        autoplayTimeout={5}
        autoplay={true}>
        <View style={[styles.slide1, {backgroundColor: 'white'}]}>
          <FastImage
            source={require('../assests/icons/food_truck_swiper_image_3.jpg')}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        <View style={[styles.slide1, {backgroundColor: 'white'}]}>
          <FastImage
            source={require('../assests/icons/food_truck_swiper_image_2.jpg')}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        <View style={[styles.slide1, {backgroundColor: 'white'}]}>
          <FastImage
            source={require('../assests/icons/food_truck_swiper_image_1.jpg')}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Swipers;

const styles = StyleSheet.create({
  wrapper: {
    height: config.responsiveScreenHeight(25),
    marginTop: '10%',
    borderRadius: 20,
  },
  slide1: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    height: config.responsiveScreenHeight(25),
    width: config.responsiveScreenWidth(90),
    borderRadius: 20,
    overflow: 'hidden',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper2: {
    height: config.responsiveScreenHeight(31),
    width: config.responsiveScreenWidth(90),
    position: 'absolute',
    top: config.responsiveScreenHeight(10),
  },
});
