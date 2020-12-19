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
import Home from './AppViews/HomePage';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
console.disableYellowBox = true;

function HomeBottom() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={
        theme.mode === 'no-preference'
          ? `${config.primaryColor}`
          : theme.mode === 'light'
          ? `${config.primaryColor}`
          : `${config.secondaryColor}`
      }
      barStyle={{
        backgroundColor:
          theme.mode === 'no-preference'
            ? '#575c66'
            : theme.mode === 'light'
            ? '#575c66'
            : '#eaeaeb',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // borderColor: 'transparent',
        overflow: 'hidden',
        position: 'absolute',
        height: config.responsiveScreenHeight(8),
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assests/icons/home.png')}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="f"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assests/icons/user.png')}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Home}
        options={{
          tabBarLabel: 'Add Menu',
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assests/icons/add.png')}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="feeds"
        component={Home}
        options={{
          tabBarLabel: 'Feed backs',
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assests/icons/feeds.png')}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="recent"
        component={Home}
        options={{
          tabBarLabel: 'Recent Visit',
          tabBarIcon: ({color}) => (
            <Image
              source={require('./assests/icons/recent.png')}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
}

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

            <Stack.Screen
              name="Home"
              component={HomeBottom}
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
