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

const InfoText = (props) => {
  const theme = useTheme();
  return <Title>{props.text}</Title>;
};

export default InfoText;

const Title = styled.Text`
  font-size: ${JSON.stringify(config.responsiveScreenFontSize(1.7))};
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
  margin-vertical: 20;
  width: ${JSON.stringify(config.width / 1.6)};
  font-weight: bold;
`;
