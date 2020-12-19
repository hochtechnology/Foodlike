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

const SearchBar = (props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: config.responsiveScreenHeight(5),
        width: config.responsiveScreenWidth(90),
        backgroundColor:
          theme.mode === 'no-preference'
            ? '#575c66'
            : theme.mode === 'light'
            ? '#575c66'
            : '#eaeaeb',
        borderRadius: 20,
        color:
          theme.mode === 'no-preference'
            ? '#575c66'
            : theme.mode === 'light'
            ? '#575c66'
            : '#eaeaeb',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Platform.OS === 'android' ? 0 : 2,
        top: Platform.OS === 'android' ? 5 : 10,
        position: 'absolute',
        top: config.responsiveScreenHeight(5),
      }}>
      <Image
        source={require('../assests/icons/search.png')}
        style={{
          height: 20,
          width: 20,
          marginLeft: 10,
          tintColor:
            theme.mode === 'no-preference'
              ? '#eaeaeb'
              : theme.mode === 'light'
              ? '#eaeaeb'
              : '#575c66',
        }}
        resizeMode="cover"
      />
      <TextInput
        style={{
          width: config.responsiveScreenWidth(75),
          fontSize: 16,
          marginHorizontal: 5,
          height: config.responsiveScreenHeight(5),
          color:
            theme.mode === 'no-preference'
              ? '#eaeaeb'
              : theme.mode === 'light'
              ? '#eaeaeb'
              : '#575c66',
        }}
        selectionColor={
          theme.mode === 'no-preference'
            ? '#eaeaeb'
            : theme.mode === 'light'
            ? '#eaeaeb'
            : '#575c66'
        }
        placeholderTextColor={
          theme.mode === 'no-preference'
            ? '#eaeaeb'
            : theme.mode === 'light'
            ? '#eaeaeb'
            : '#575c66'
        }
        placeholder={'Search'}
        onChangeText={props.onChangeText}
        maxLength={320}
        value={props.value}
        autoCapitalize="none"
        returnKeyType="done"
        autoCorrect={false}
        onSubmitEditing={props.onSubmitEditing}
        onBlur={props.onBlur}
        underlineColorAndroid="rgba(0,0,0,0)"></TextInput>
    </View>
  );
};

export default SearchBar;
