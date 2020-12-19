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
import {useFocusEffect} from '@react-navigation/native';
import config from './config';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from './ManageThemeProvider';
import FastImage from 'react-native-fast-image';

function SplashScreen({route, navigation}) {
  const theme = useTheme();
  console.log(theme);
  useFocusEffect(
    React.useCallback(() => {
      navigateToNext();
      // return () => navigateToNext();
    }, []),
  );

  const navigateToNext = () => {
    setTimeout(() => {
      navigation.navigate('MobileLogin');
    }, 3000);
  };

  let imgArray = [
    {
      img: require('./assests/foodIcons/food_1.png'),
      per_1: '1%',
      per_2: '5%',
    },
    {
      img: require('./assests/foodIcons/food_7.png'),
      per_1: '5%',
      per_2: '25%',
    },
    {
      img: require('./assests/foodIcons/food_2.png'),
      per_1: '20%',
      per_2: '35%',
    },
    {
      img: require('./assests/foodIcons/food_3.png'),
      per_1: '35%',
      per_2: '25%',
    },
    {
      img: require('./assests/foodIcons/food_4.png'),
      per_1: '28%',
      per_2: '80%',
    },
    {
      img: require('./assests/foodIcons/food_3.png'),
      per_1: '28%',
      per_2: '55%',
    },
    {
      img: require('./assests/foodIcons/food_5.png'),
      per_1: '80%',
      per_2: '30%',
    },
    {
      img: require('./assests/foodIcons/food_6.png'),
      per_1: '15%',
      per_2: '70%',
    },
    {
      img: require('./assests/foodIcons/food_7.png'),
      per_1: '45%',
      per_2: '70%',
    },
    {
      img: require('./assests/foodIcons/food_1.png'),
      per_1: '15%',
      per_2: '10%',
    },
    {
      img: require('./assests/foodIcons/food_2.png'),
      per_1: '8%',
      per_2: '50%',
    },
    {
      img: require('./assests/foodIcons/food_3.png'),
      per_1: '90%',
      per_2: '20%',
    },
    {
      img: require('./assests/foodIcons/food_4.png'),
      per_1: '60%',
      per_2: '50%',
    },
    {
      img: require('./assests/foodIcons/food_5.png'),
      per_1: '50%',
      per_2: '1%',
    },
    {
      img: require('./assests/foodIcons/food_6.png'),
      per_1: '28%',
      per_2: '3%',
    },
    {
      img: require('./assests/foodIcons/food_7.png'),
      per_1: '35%',
      per_2: '1%',
    },

    {
      img: require('./assests/foodIcons/food_1.png'),
      per_1: '50%',
      per_2: '30%',
    },
    {
      img: require('./assests/foodIcons/food_2.png'),
      per_1: '50%',
      per_2: '60%',
    },
    {
      img: require('./assests/foodIcons/food_3.png'),
      per_1: '60%',
      per_2: '20%',
    },
    {
      img: require('./assests/foodIcons/food_4.png'),
      per_1: '38%',
      per_2: '60%',
    },
    {
      img: require('./assests/foodIcons/food_5.png'),
      per_1: '43%',
      per_2: '20%',
    },
    {
      img: require('./assests/foodIcons/food_6.png'),
      per_1: '70%',
      per_2: '3%',
    },
    {
      img: require('./assests/foodIcons/food_7.png'),
      per_1: '70%',
      per_2: '30%',
    },

    {
      img: require('./assests/foodIcons/food_1.png'),
      per_1: '55%',
      per_2: '80%',
    },
    {
      img: require('./assests/foodIcons/food_2.png'),
      per_1: '63%',
      per_2: '80%',
    },
    {
      img: require('./assests/foodIcons/food_3.png'),
      per_1: '70%',
      per_2: '56%',
    },
    {
      img: require('./assests/foodIcons/food_4.png'),
      per_1: '78%',
      per_2: '10%',
    },
    {
      img: require('./assests/foodIcons/food_5.png'),
      per_1: '85%',
      per_2: '1%',
    },
    {
      img: require('./assests/foodIcons/food_6.png'),
      per_1: '85%',
      per_2: '45%',
    },
    {
      img: require('./assests/foodIcons/food_7.png'),
      per_1: '78%',
      per_2: '60%',
    },
  ];

  return (
    <Container>
      <Title>Foodlike</Title>

      <View
        style={{
          position: 'absolute',
          zIndex: -10,
          height: config.height,
          width: config.width / 2,
          backgroundColor:
            theme.mode === 'no-preference'
              ? `${config.primaryColor}`
              : theme.mode === 'light'
              ? `${config.primaryColor}`
              : `${config.secondaryColor}`,
          borderTopLeftRadius: config.height / 2,
          borderBottomLeftRadius: config.height / 2,
          shadowRadius: 5,
          shadowOpacity: 0.5,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowColor: 'gray',
          top: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        {imgArray.map((item, index) => {
          return (
            <ImageBackground
              source={item.img}
              style={{
                height: config.responsiveScreenHeight(4),
                width: config.responsiveScreenWidth(4),
                position: 'absolute',
                right: item.per_2,
                top: item.per_1,
                // transform: [{rotate: '90deg'}],
              }}
              resizeMode="contain"
              blurRadius={Platform.OS === 'android' ? 10 : 1.5}
            />
          );
        })}
      </View>
    </Container>
  );
}
export default SplashScreen;

const styles = StyleSheet.create({
  object: {
    position: 'absolute',
    zIndex: -10,
    height: config.height,
    width: config.width / 2,
    backgroundColor: `${config.secondaryColor}`,
    top: 0,
    right: 0,
    borderTopLeftRadius: config.height / 2,
    borderBottomLeftRadius: config.height / 2,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowColor: 'gray',
    overflow: 'hidden',
  },
});

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 80;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  position: absolute;
  box-shadow: 3px 3px 3px black;
  elevation: 1;
`;
