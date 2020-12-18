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
  KeyboardAvoidingView,
} from 'react-native';

import config from '../config';
import BaseLayout from '../components/BaseLayout';
import CardView from '../components/CardView';
import Heading_1 from '../components/Heading_1';
import InfoText from '../components/InfoText';
import CustomButton from '../components/CustomButton';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
function Designation({route, navigation}) {
  const theme = useTheme();
  console.log(theme.mode);
  return (
    <BaseLayout>
      <CardView>
        <Heading_1 text={'Foodlike'}></Heading_1>

        <InfoText text={'Sign up'}></InfoText>

        <Image
          source={require('../assests/icons/food-truck.png')}
          style={{
            height: config.responsiveScreenHeight(10),
            width: config.responsiveScreenWidth(20),
            tintColor:
              theme.mode === 'no-preference'
                ? '#fafafa'
                : theme.mode === 'light'
                ? '#eaeaeb'
                : '#575c66',
          }}
          resizeMode="contain"
        />

        <CustomButton
          text={'As foodtruck owner'}
          onPress={() => {
            navigation.navigate('Registration', {text: 'Foodtruck'});
          }}
        />
        <Image
          source={require('../assests/icons/user.png')}
          style={{
            height: config.responsiveScreenHeight(10),
            width: config.responsiveScreenWidth(20),
            tintColor:
              theme.mode === 'no-preference'
                ? '#fafafa'
                : theme.mode === 'light'
                ? '#eaeaeb'
                : '#575c66',
          }}
          resizeMode="contain"
        />
        <CustomButton
          text={'As visitor'}
          onPress={() => {
            navigation.navigate('Registration', {text: 'Visitor'});
          }}
        />
      </CardView>
    </BaseLayout>
  );
}
export default Designation;
