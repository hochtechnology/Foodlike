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

const SmallDescriptionText = (props) => {
  const theme = useTheme();
  return <Title>{props.text}</Title>;
};

export default SmallDescriptionText;

const Title = styled.Text`
  font-size: ${JSON.stringify(config.responsiveScreenFontSize(1.4))};
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
  margin-vertical: 2;
  width: ${JSON.stringify(config.width / 1.4)};
  font-weight: bold;
`;
