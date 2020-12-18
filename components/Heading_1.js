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
} from 'react-native';
import config from '../config';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from '../ManageThemeProvider';

const Heading_1 = (props) => {
  const theme = useTheme();
  return <Title>{props.text}</Title>;
};

export default Heading_1;

const Title = styled.Text`
  font-size: ${JSON.stringify(config.responsiveScreenFontSize(2.8))};
  font-weight: bold;
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
  position: absolute;
  top: 20;
`;
