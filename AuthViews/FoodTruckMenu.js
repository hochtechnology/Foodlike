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
  Modal,
} from 'react-native';

import config from '../config';
import BaseLayout from '../components/BaseLayout';
import InfoText from '../components/InfoText';
import AlertModal from '../components/AlertModal';
import CustomButton from '../components/CustomButton';
import SmallDescriptionText from '../components/SmallDescriptionText';
import SmallButton from '../components/SmallButtons';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FoodTruckMenu({route, navigation}) {
  const theme = useTheme();
  const [modal, showModal] = useState(false);
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [item_image_1, set_item_image_1] = useState('');
  const [item_image_2, set_item_image_2] = useState('');
  const [item_image_3, set_item_image_3] = useState('');
  const [item_image_4, set_item_image_4] = useState('');
  const [item_image_5, set_item_image_5] = useState('');
  const [images_selected, set_image_selected] = useState('');
  const [added_items, set_added_items] = useState([]);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [clearMenuModal, setClearMenuModal] = useState(false);
  const [selectedItemFrom, setSelectedItemFrom] = useState(0);
  const itemDescRef = useRef(null);
  const itemPriceRef = useRef(null);

  const wheelPickerData = [
    'Select',
    'Italian',
    'Gujarati',
    'Punjabi',
    'South Indian',
  ];

  useEffect(() => {
    added();
  }, [item_image_1, item_image_2, item_image_3, item_image_4, item_image_5]);

  const callImagePicker = async () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images);
        if (images.length > 5) {
          Platform.OS === 'android'
            ? ToastAndroid.show(
                'You can only select maximum 5 images',
                ToastAndroid.LONG,
              )
            : Alert.alert('You can only select maximum 5 images');
          set_image_selected('');
          return false;
        } else {
          set_image_selected(images.length);

          set_item_image_1('');
          set_item_image_2('');
          set_item_image_3('');
          set_item_image_4('');
          set_item_image_5('');

          return Promise.all(
            images.map(async (item, index) => {
              if (index === 0) {
                set_item_image_1(item.path);
              } else if (index === 1) {
                set_item_image_2(item.path);
              } else if (index === 2) {
                set_item_image_3(item.path);
              } else if (index === 3) {
                set_item_image_4(item.path);
              } else if (index === 4) {
                set_item_image_5(item.path);
              } else {
                console.log('error');
              }
            }),
          )
            .then((e) => {})
            .catch((E) => {
              console.log(E);
            });
        }
      })
      .catch((e) => {
        console.log('picker err', e);
        set_image_selected('');
        set_item_image_1('');
        set_item_image_2('');
        set_item_image_3('');
        set_item_image_4('');
        set_item_image_5('');
      });
  };
  const added = () => {
    console.log(
      item_image_1,
      item_image_2,
      item_image_3,
      item_image_4,
      item_image_5,
    );
  };

  const addItemToArray = async () => {
    const check = added_items.filter(
      (item) => `${item.title}` === `${itemTitle}`,
    );
    console.log('check', check);
    const priceCheck = /^[0-9\b]+$/;
    if (check.length === 0) {
      if (itemTitle === '') {
        Platform.OS === 'android'
          ? ToastAndroid.show('Enter item title', ToastAndroid.LONG)
          : Alert.alert('Enter item title');
        return false;
      } else if (itemDescription === '') {
        Platform.OS === 'android'
          ? ToastAndroid.show('Enter item description', ToastAndroid.LONG)
          : Alert.alert('Enter item description');
        return false;
      } else if (selectedItemFrom === 0) {
        Platform.OS === 'android'
          ? ToastAndroid.show('Select item type', ToastAndroid.LONG)
          : Alert.alert('Select item type');
        return false;
      } else if (itemPrice === '') {
        Platform.OS === 'android'
          ? ToastAndroid.show('Enter item price', ToastAndroid.LONG)
          : Alert.alert('Enter item price');
        return false;
      } else if (priceCheck.test(itemPrice) === false) {
        Platform.OS === 'android'
          ? ToastAndroid.show('Enter valid price', ToastAndroid.LONG)
          : Alert.alert('Enter valid price');
        return false;
      } else if (item_image_1 === '') {
        Platform.OS === 'android'
          ? ToastAndroid.show('Upload the item dish image ', ToastAndroid.LONG)
          : Alert.alert('Upload the item dish image');
        return false;
      } else {
        set_added_items((oldArray) => [
          ...oldArray,
          {
            id: `${itemTitle}_id`,
            title: `${itemTitle}`,
            description: `${itemDescription}`,
            price: `${itemPrice}`,
            images_1: `${item_image_1}`,
            images_2: `${item_image_2}`,
            images_3: `${item_image_3}`,
            images_4: `${item_image_4}`,
            images_5: `${item_image_5}`,
          },
        ]);
        set_item_image_1('');
        set_item_image_2('');
        set_item_image_3('');
        set_item_image_4('');
        set_item_image_5('');
        setItemTitle('');
        setItemDescription('');
        setItemPrice('');
        set_image_selected('');
        console.log('this is add', added_items);
      }
    } else {
      Platform.OS === 'android'
        ? ToastAndroid.show(
            'You are not allowed to add same dish name',
            ToastAndroid.LONG,
          )
        : Alert.alert('You are not allowed to add same dish name');
      return false;
    }
  };
  return (
    <BaseLayout>
      <Container>
        <Title>Foodlike</Title>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          // enableAutomaticScroll={true}
          contentContainerStyle={{
            flexGrow: 1,
            height: undefined,
            width: config.responsiveScreenWidth(80),
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom:
              Platform.OS === 'ios' ? '30%' : config.responsiveScreenHeight(15),
          }}
          showsVerticalScrollIndicator={false}>
          <InfoText text={'Menu'}></InfoText>

          {/* item Name */}
          <TextInput
            style={[
              styles.inputStyle,
              {
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

                textAlign: 'justify',
              },
            ]}
            placeholderTextColor={
              theme.mode === 'no-preference'
                ? '#575c66'
                : theme.mode === 'light'
                ? '#575c66'
                : '#eaeaeb'
            }
            placeholder={'Item name'}
            selectionColor={'gray'}
            onChangeText={(value) =>
              itemTitle.length === 0
                ? setItemTitle(value.replace(/\s/g, ''))
                : setItemTitle(value)
            }
            value={itemTitle}
            autoCapitalize="none"
            returnKeyType={'next'}
            maxLength={300}
            onFocus={() => {}}
            onSubmitEditing={() => {
              itemDescRef.current.focus();
            }}
            onBlur={() => {}}
            blurOnSubmit={false}
            autoCorrect={false}></TextInput>

          <InfoText text={'Item type:'}></InfoText>
          {/* item type */}
          <View
            style={[
              styles.inputStyle,
              {
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
                justifyContent: 'center',
              },
            ]}>
            <Picker
              selectedValue={selectedItemFrom}
              style={{
                width: '70%',
                color:
                  Platform.OS === 'android'
                    ? theme.mode === 'no-preference'
                      ? '#575c66'
                      : theme.mode === 'light'
                      ? '#575c66'
                      : '#eaeaeb'
                    : '',
                backgroundColor:
                  Platform.OS === 'android'
                    ? theme.mode === 'no-preference'
                      ? '#fafafa'
                      : theme.mode === 'light'
                      ? '#eaeaeb'
                      : '#575c66'
                    : '',
                height:
                  Platform.OS === 'ios'
                    ? config.responsiveScreenHeight(6)
                    : '50%',
              }}
              itemStyle={{
                backgroundColor:
                  theme.mode === 'no-preference'
                    ? '#fafafa'
                    : theme.mode === 'light'
                    ? '#eaeaeb'
                    : '#575c66',
                borderRadius: 20,
                height: config.responsiveScreenHeight(6),
                fontSize: config.responsiveScreenFontSize(1.88),
                color:
                  theme.mode === 'no-preference'
                    ? '#575c66'
                    : theme.mode === 'light'
                    ? '#575c66'
                    : '#eaeaeb',
              }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedItemFrom(itemValue);
              }}>
              {wheelPickerData.map((item, index) => {
                return <Picker.Item label={item} value={index} />;
              })}
            </Picker>
          </View>
          {/* item Desc */}

          <TextInput
            style={[
              styles.inputStyle,
              {
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
                marginVertical: '5%',
                width: config.responsiveScreenWidth(77),
                height: config.responsiveScreenHeight(15),
              },
            ]}
            placeholderTextColor={
              theme.mode === 'no-preference'
                ? '#575c66'
                : theme.mode === 'light'
                ? '#575c66'
                : '#eaeaeb'
            }
            placeholder={'Item description'}
            selectionColor={'gray'}
            onChangeText={(value) =>
              itemDescription.length === 0
                ? setItemDescription(value.replace(/\s/g, ''))
                : setItemDescription(value)
            }
            value={itemDescription}
            autoCapitalize="none"
            returnKeyType={'next'}
            maxLength={1000}
            onFocus={() => {}}
            onSubmitEditing={() => {
              itemPriceRef.current.focus();
            }}
            multiline
            onBlur={() => {}}
            blurOnSubmit={false}
            ref={itemDescRef}
            autoCorrect={false}></TextInput>

          {/* item price */}

          <TextInput
            style={[
              styles.inputStyle,
              {
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
              },
            ]}
            placeholderTextColor={
              theme.mode === 'no-preference'
                ? '#575c66'
                : theme.mode === 'light'
                ? '#575c66'
                : '#eaeaeb'
            }
            placeholder={'Item price in rs'}
            selectionColor={'gray'}
            onChangeText={(value) =>
              itemPrice.length === 0
                ? setItemPrice(value.replace(/\s/g, ''))
                : setItemPrice(value)
            }
            value={itemPrice}
            autoCapitalize="none"
            returnKeyType={'done'}
            keyboardType="number-pad"
            maxLength={10}
            onFocus={() => {}}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            onBlur={() => {}}
            blurOnSubmit={false}
            ref={itemPriceRef}
            autoCorrect={false}></TextInput>

          <TouchableOpacity
            style={{
              alignSelf: 'flex-start',
              marginHorizontal: '5%',
              marginVertical: '2%',
            }}
            onPress={() => {
              callImagePicker();
            }}>
            <Image
              source={require('../assests/icons/photo.png')}
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
            <Text
              style={{
                color:
                  theme.mode === 'no-preference'
                    ? '#fafafa'
                    : theme.mode === 'light'
                    ? '#eaeaeb'
                    : '#575c66',
              }}>
              Upload Image
            </Text>
          </TouchableOpacity>

          {images_selected === '' || images_selected === undefined ? (
            <View />
          ) : (
            <SmallDescriptionText text={`${images_selected} image selected`} />
          )}

          <CustomButton
            text={'Add Menu Item'}
            onPress={() => addItemToArray()}
          />

          <View
            style={{
              height: '20%',
              width: config.responsiveScreenWidth(77),
              backgroundColor:
                theme.mode === 'no-preference'
                  ? '#fafafa'
                  : theme.mode === 'light'
                  ? '#eaeaeb'
                  : '#575c66',
              borderRadius: 20,
              overflow: 'hidden',
              marginVertical: '5%',
            }}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                padding: 10,
              }}>
              {added_items.map((item, index) => {
                return (
                  <View
                    style={{
                      height: config.responsiveScreenHeight(8),
                      backgroundColor:
                        theme.mode === 'no-preference'
                          ? '#575c66'
                          : theme.mode === 'light'
                          ? '#575c66'
                          : '#eaeaeb',
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      marginVertical: '2%',
                      justifyContent: 'space-around',
                    }}>
                    <FastImage
                      source={{uri: `file://${item.images_1}`}}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50 / 2,
                      }}></FastImage>
                    <Text
                      style={{
                        color:
                          theme.mode === 'no-preference'
                            ? '#eaeaeb'
                            : theme.mode === 'light'
                            ? '#eaeaeb'
                            : '#575c66',
                        fontWeight: 'bold',
                        width: config.responsiveScreenWidth(22),
                      }}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color:
                          theme.mode === 'no-preference'
                            ? '#eaeaeb'
                            : theme.mode === 'light'
                            ? '#eaeaeb'
                            : '#575c66',
                        fontWeight: 'bold',
                      }}>
                      Rs. {item.price}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() =>
              added_items.length === 0 || added_items === undefined
                ? {}
                : setClearMenuModal(true)
            }>
            <Title2>🚮 Do you want to clear all menu?</Title2>
          </TouchableOpacity>

          <CustomButton
            text={'Save menu'}
            onPress={() =>
              added_items.length === 0 || added_items === undefined
                ? Platform.OS === 'android'
                  ? ToastAndroid.show(
                      'Please add at least 1 menu item',
                      ToastAndroid.LONG,
                    )
                  : Alert.alert('Please add at least 1 menu item')
                : setConfirmationModal(true)
            }
          />
        </KeyboardAwareScrollView>

        <AlertModal
          visible={confirmationModal}
          text={'Are you sure you want to save this menu and register?'}
          buttonYesText={'Yes'}
          buttonNoText={'No'}
          onYesPress={async () => {
            console.log('success'),
              setConfirmationModal(false),
              await AsyncStorage.setItem('User', 'Foodtruck')
                .then(() => {
                  navigation.navigate('Home');
                })
                .then(() => {
                  navigation.navigate('Home');
                })
                .catch((e) => {
                  console.log('async e', e);
                });
          }}
          onNoPress={() => {
            setConfirmationModal(false);
          }}
          onRequestClose={() => {
            setConfirmationModal(false);
          }}></AlertModal>

        <AlertModal
          visible={clearMenuModal}
          text={'Are you sure you want to clear all menu items?'}
          buttonYesText={'Yes'}
          buttonNoText={'No'}
          onYesPress={() => {
            set_added_items([]), setClearMenuModal(false);
          }}
          onNoPress={() => {
            setClearMenuModal(false);
          }}
          onRequestClose={() => {
            setClearMenuModal(false);
          }}></AlertModal>
      </Container>
    </BaseLayout>
  );
}
export default FoodTruckMenu;

const styles = StyleSheet.create({
  modalDesign: {
    width: config.responsiveScreenWidth(80),
    height: config.responsiveScreenHeight(50),
    top: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
  },
  inputStyle: {
    width: config.responsiveScreenWidth(77),
    height: config.responsiveScreenHeight(6),
    fontSize: 18,
    paddingHorizontal: 18,
  },
});

const Container = styled.View`
  background: ${(props) => props.theme.text};
  height: ${JSON.stringify(config.responsiveScreenHeight(80))};
  width: ${JSON.stringify(config.responsiveScreenWidth(90))};
  border-radius: 30px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 18px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  elevation: 8;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: ${JSON.stringify(config.responsiveScreenFontSize(2.8))};
  font-weight: bold;
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
  top: 10;
  margin-vertical: 10;
`;

const Title2 = styled.Text`
  font-size: 12;
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
`;
