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

const EnterButton = (props) => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(100));
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          theme.mode === 'no-preference'
            ? config.secondaryColor
            : theme.mode === 'light'
            ? config.secondaryColor
            : '#6762F5',
        width: config.responsiveScreenWidth(60),
        height: config.responsiveScreenHeight(6),
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: Platform.OS === 'android' ? 80 : 100,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 80,
        marginVertical: '5%',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: {
          height: 3,
          width: 3,
        },
        shadowColor:
          theme.mode === 'no-preference'
            ? config.secondaryColor
            : theme.mode === 'light'
            ? config.secondaryColor
            : '#6762F5',
        elevation: 5,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: config.responsiveScreenFontSize(2.4),
          fontWeight: 'bold',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default EnterButton;

const Container = styled.View`
  background: ${(props) => props.theme.text};
  height: ${JSON.stringify(config.height / 1.7)};
  width: ${JSON.stringify(config.width / 1.3)};
  border-radius: 30px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 18px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  elevation: 8;
  align-items: center;
  justify-content: center;
`;
