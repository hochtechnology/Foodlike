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
  PermissionsAndroid,
  BackHandler,
  Switch,
  KeyboardAvoidingView,
} from 'react-native';

import config from '../config';
import BaseLayout from '../components/BaseLayout';
import SearchBar from '../components/SearchBar';
import Swipers from '../components/Swipers';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

let visitorsData = [
  {title: 'chinese', img: require('../assests/icons/chinese.jpg')},
  {title: 'gujarati', img: require('../assests/icons/gujarati.jpg')},
  {title: 'punjabi', img: require('../assests/icons/punjabi.jpg')},
  {title: 'southindian', img: require('../assests/icons/south.jpg')},
  // {title: 'italian', img: require('../assests/icons/italian.jpeg')},
  // {title: 'american', img: require('../assests/icons/american.jpg')},
];

function Home({route, navigation}) {
  const theme = useTheme();
  const [userType, setUserType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [contentHeight, setContentHeight] = useState('');

  useEffect(() => {
    getItem();
  }, [userType]);

  const getItem = async () => {
    const user = await AsyncStorage.getItem('User');
    setUserType(user);
  };

  if (userType === 'Foodtruck') {
    return (
      <BaseLayout disableColorView>
        <SearchBar
          onChangeText={(value) => {
            setSearchQuery(
              searchQuery.length === 0 ? value.replace(/\s/g, '') : value,
            );
          }}
          value={searchQuery}
          onSubmitEditing={() => {}}
          onBlur={() => {}}></SearchBar>
        <Swipers />
      </BaseLayout>
    );
  } else {
    return (
      <BaseLayout disableColorView>
        <SearchBar
          onChangeText={(value) => {
            setSearchQuery(
              searchQuery.length === 0 ? value.replace(/\s/g, '') : value,
            );
          }}
          value={searchQuery}
          onSubmitEditing={() => {}}
          onBlur={() => {}}></SearchBar>
        <Swipers />
        <View style={styles.MainContainer}>
          <FlatList
            data={visitorsData}
            style={{flex: 1, paddingBottom: 50}}
            contentContainerStyle={{
              flexGrow: 1,
              // height: Number(contentHeight),
            }}
            onMomentumScrollBegin={async (e) => {
              const contentHeight = e.nativeEvent.contentSize.height;
              console.log(contentHeight);
              setContentHeight(contentHeight);
            }}
            scrollEnabled
            renderItem={({item}) => (
              <View
                style={{
                  justifyContent: 'center',
                  width: config.responsiveScreenWidth(45),
                }}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('press', item.title);
                  }}
                  style={styles.GridViewBlockStyle}>
                  <ImageBackground
                    style={[
                      StyleSheet.absoluteFillObject,
                      {alignItems: 'center', justifyContent: 'center'},
                    ]}
                    source={item.img}></ImageBackground>
                </TouchableOpacity>
                <Text
                  style={{
                    color:
                      theme.mode === 'no-preference'
                        ? '#575c66'
                        : theme.mode === 'light'
                        ? '#575c66'
                        : '#eaeaeb',
                    padding: 10,
                    fontSize: 20,
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}>
                  {item.title}
                </Text>
              </View>
            )}
            numColumns={2}
          />
        </View>
      </BaseLayout>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    // flex: 1,
    margin: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
    position: 'absolute',
    width: config.responsiveScreenWidth(90),
    top: config.responsiveScreenHeight(38),
    // height: config.responsiveScreenHeight(100),
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: config.responsiveScreenHeight(15),
    margin: 5,
    backgroundColor: '#00BCD4',
    borderRadius: 20,
    overflow: 'hidden',
  },
  GridViewInsideTextItemStyle: {
    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',
  },
});
