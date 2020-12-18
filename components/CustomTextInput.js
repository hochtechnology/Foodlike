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

const CustomTextInput = (props) => {
  const [bounceValue, setBounceValue] = useState(new Animated.Value(100));
  const theme = useTheme();
  console.log(theme.mode);
  return (
    <TextInput
      style={{
        width: '80%',
        height: config.responsiveScreenHeight(7),
        fontSize: 18,
        paddingHorizontal: 18,
        fontWeight: 'bold',
        backgroundColor:
          theme.mode === 'no-preference'
            ? '#fafafa'
            : theme.mode === 'light'
            ? '#eaeaeb'
            : '#575c66',
        borderRadius: 20,
        color:
          theme.mode === 'no-preference'
            ? '#575c66'
            : theme.mode === 'light'
            ? '#575c66'
            : '#eaeaeb',
      }}
      placeholderTextColor={
        theme.mode === 'no-preference'
          ? '#575c66'
          : theme.mode === 'light'
          ? '#575c66'
          : '#eaeaeb'
      }
      placeholder={props.placeholder}
      selectionColor={props.selectionColor}
      onChangeText={props.onChangeText}
      value={props.value}
      autoCapitalize="none"
      returnKeyType={props.returnKeyType}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      onFocus={props.onFocus}
      onSubmitEditing={props.onSubmitEditing}
      onBlur={props.onBlur}
      autoFocus
      blurOnSubmit={false}></TextInput>
  );
};

export default CustomTextInput;
