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
  StatusBar,
} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Appearance, useColorScheme} from 'react-native-appearance';
import ThemeManager, {useTheme} from './ManageThemeProvider';
import config from './config';
import {BackdropProvider} from 'react-native-propel-kit';
import SplashScreen from './SplashScreen';
import MobileLogin from './AuthViews/MobileLoginScreen';
import OtpVerify from './AuthViews/OtpVerifyScreen';
import Designation from './AuthViews/Designation';
import Registration from './AuthViews/RegistrationPage';
import FoodTruckMenu from './AuthViews/FoodTruckMenu';

const Stack = createStackNavigator();
console.disableYellowBox = true;
export default function App() {
  return (
    <BackdropProvider>
      <ThemeManager>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="MobileLogin"
              component={MobileLogin}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="Otp"
              component={OtpVerify}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="Designation"
              component={Designation}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="FoodTruckMenu"
              component={FoodTruckMenu}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeManager>
    </BackdropProvider>
  );
}
