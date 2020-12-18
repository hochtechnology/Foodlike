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

var isHidden = true;

const SmallButton = (props) => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(100));
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: config.responsiveScreenWidth(60),
        height: config.responsiveScreenHeight(5),
        borderRadius: 10,
      }}>
      <Text
        style={{
          color:
            theme.mode === 'no-preference'
              ? `${config.primaryColor}`
              : theme.mode === 'light'
              ? `${config.primaryColor}`
              : `${config.secondaryColor}`,
          fontSize: config.responsiveScreenFontSize(1.8),
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
