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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

var isHidden = true;

const CardView = ({children}) => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(100));
  const theme = useTheme();
  return <Container>{children}</Container>;
};

export default CardView;

const Container = styled.View`
  background: ${(props) => props.theme.text};
  height: ${JSON.stringify(config.responsiveScreenHeight(60))};
  width: ${JSON.stringify(config.responsiveScreenWidth(80))};
  border-radius: 30px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 18px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  elevation: 8;
  align-items: center;
  justify-content: center;
`;
