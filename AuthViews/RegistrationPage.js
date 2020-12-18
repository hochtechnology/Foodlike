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
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';
import {TimePicker} from 'react-native-propel-kit';
import DateTimePicker from '@react-native-community/datetimepicker';

function Registration({route, navigation}) {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [companyNumber, setCompanyNumber] = useState('');
  const [foodTruckRegistrationNo, setFoodTruckRegistrationNo] = useState('');
  const [selectedItemFrom, setSelectedItemFrom] = useState(0);
  const [selectedItemTo, setSelectedItemTo] = useState(0);
  const [foodSpeciality, setFoodSpeiality] = useState('');
  const [time, setTime] = useState(new Date());
  const [time_2_ios, setTime_2_ios] = useState(new Date());
  const [show, setShow] = useState(false);
  const [depShow, setDepShow] = useState(false);
  const [finalArrievedTime, setFinalArrivedTime] = useState('');
  const [finalDepartedTime, setFinalDepartedTime] = useState('');
  const [checkTime, setCheckTime] = useState('');
  const [password, setPassword] = useState('');
  const [androidTime, setAndroidTime] = useState('');
  const [emailVisitor, setEmailVisitor] = useState('');
  const theme = useTheme();
  const {text} = route.params;

  let mobileRef = useRef(null);
  let companyRef = useRef(null);
  let foodTruckRegRef = useRef(null);
  let specialityRef = useRef(null);

  const wheelPickerData = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const arrivalTime = (ev, val) => {
    console.log('arrival', ev, val);
    setShow(false);
    var time = Platform.OS === 'ios' ? ev : val;
    setTime(ev);
    var timeStamp = `${moment(time).utcOffset('+05:30').format('hh:mm A')}`;
    console.log('time stamp', timeStamp);
    setFinalArrivedTime(timeStamp);
    setCheckTime(ev);
  };

  const departureTime = (ev, val) => {
    console.log('diparture time', val);
    setDepShow(false);
    var time = Platform.OS === 'ios' ? ev : val;
    setTime_2_ios(ev);
    var timeStamp = `${moment(time).utcOffset('+05:30').format('hh:mm A')}`;
    console.log('time stamp', timeStamp);
    setFinalDepartedTime(timeStamp);
  };

  if (text === 'Foodtruck') {
    return (
      <BaseLayout>
        <Container>
          <Title>Foodlike</Title>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{
              flexGrow: 1,
              width: config.responsiveScreenWidth(80),
              height: undefined,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: Platform.OS === 'ios' ? '25%' : '25%',
              paddingBottom:
                Platform.OS === 'ios'
                  ? '15%'
                  : config.responsiveScreenHeight(15),
            }}
            showsVerticalScrollIndicator={false}>
            <InfoText text={`${text} Registration`}></InfoText>

            {/* name foodtruck */}
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
              placeholder={'Name'}
              selectionColor={'gray'}
              onChangeText={(value) => setName(value)}
              value={name}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={300}
              onFocus={() => {}}
              onSubmitEditing={() => {
                mobileRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}></TextInput>

            {/* mobile foodtruck */}
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
                },
              ]}
              placeholderTextColor={
                theme.mode === 'no-preference'
                  ? '#575c66'
                  : theme.mode === 'light'
                  ? '#575c66'
                  : '#eaeaeb'
              }
              keyboardType="number-pad"
              placeholder={'Mobile no.'}
              selectionColor={'gray'}
              onChangeText={(value) => setMobileNo(value)}
              value={mobileNo}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={10}
              onFocus={() => {}}
              onSubmitEditing={() => {
                companyRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={mobileRef}></TextInput>

            {/* company no foodtruck */}
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
              placeholder={'Company no.'}
              selectionColor={'gray'}
              onChangeText={(value) => setCompanyNumber(value)}
              value={companyNumber}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={20}
              onFocus={() => {}}
              onSubmitEditing={() => {
                foodTruckRegRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={companyRef}></TextInput>

            {/* foodtruck registration no */}

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
                },
              ]}
              placeholderTextColor={
                theme.mode === 'no-preference'
                  ? '#575c66'
                  : theme.mode === 'light'
                  ? '#575c66'
                  : '#eaeaeb'
              }
              placeholder={'Foodtruck reg no.'}
              selectionColor={'gray'}
              onChangeText={(value) => setFoodTruckRegistrationNo(value)}
              value={foodTruckRegistrationNo}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={10}
              onFocus={() => {}}
              onSubmitEditing={() => {
                specialityRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={foodTruckRegRef}></TextInput>

            {/* speciality */}
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
              placeholder={'Food specialty'}
              selectionColor={'gray'}
              onChangeText={(value) => setFoodSpeiality(value)}
              value={foodSpeciality}
              autoCapitalize="none"
              returnKeyType={'done'}
              maxLength={300}
              onFocus={() => {}}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={specialityRef}></TextInput>

            {/* from days picker */}
            <InfoText text={'From'}></InfoText>

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
                height: Platform.OS === 'ios' ? '8%' : '5%',
              }}
              itemStyle={{
                backgroundColor:
                  theme.mode === 'no-preference'
                    ? '#fafafa'
                    : theme.mode === 'light'
                    ? '#eaeaeb'
                    : '#575c66',
                borderRadius: 20,
                height: '100%',
              }}
              onValueChange={(itemValue, itemIndex) => {
                if (selectedItemTo === itemValue) {
                  Platform.OS === 'android'
                    ? ToastAndroid.show('Select Another day', ToastAndroid.LONG)
                    : Alert.alert('Select Another day');
                  return false;
                } else {
                  setSelectedItemFrom(itemValue);
                }
              }}>
              {wheelPickerData.map((item, index) => {
                return <Picker.Item label={item} value={index} />;
              })}
            </Picker>

            {/* To days picker */}
            <InfoText text={'To'}></InfoText>

            <Picker
              selectedValue={selectedItemTo}
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
                height: Platform.OS === 'ios' ? '8%' : '5%',
              }}
              itemStyle={{
                backgroundColor:
                  theme.mode === 'no-preference'
                    ? '#fafafa'
                    : theme.mode === 'light'
                    ? '#eaeaeb'
                    : '#575c66',
                borderRadius: 20,
                height: '100%',
              }}
              onValueChange={(itemValue, itemIndex) => {
                if (selectedItemFrom === itemValue) {
                  Platform.OS === 'android'
                    ? ToastAndroid.show('Select Another day', ToastAndroid.LONG)
                    : Alert.alert('Select Another day');
                  return false;
                } else {
                  setSelectedItemTo(itemValue);
                }
              }}>
              {wheelPickerData.map((item, index) => {
                return <Picker.Item label={item} value={index} />;
              })}
            </Picker>

            {/* arrivals */}

            {Platform.OS === 'ios' ? (
              <InfoText text={'Select your arrival timing'}></InfoText>
            ) : (
              <View />
            )}

            {Platform.OS === 'android' ? (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '8%',
                  width: '80%',
                  backgroundColor:
                    theme.mode === 'no-preference'
                      ? '#fafafa'
                      : theme.mode === 'light'
                      ? '#eaeaeb'
                      : '#575c66',
                  borderRadius: 20,
                  marginVertical: '5%',
                }}
                onPress={() => setShow(true)}>
                <Text
                  style={{
                    color:
                      theme.mode === 'no-preference'
                        ? '#575c66'
                        : theme.mode === 'light'
                        ? '#575c66'
                        : '#eaeaeb',
                  }}>
                  {finalArrievedTime === '' || finalArrievedTime === undefined
                    ? 'Select your arrival timing'
                    : finalArrievedTime}
                </Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}

            {Platform.OS === 'android' ? (
              <>
                {show ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={(val, vals) => {
                      arrivalTime(val, vals);
                      setAndroidTime(vals);
                    }}
                  />
                ) : (
                  <View />
                )}
              </>
            ) : (
              <TimePicker
                title="Pick a time"
                value={time}
                onChange={(val, vals) => {
                  arrivalTime(val, vals);
                }}
                style={{
                  color:
                    theme.mode === 'no-preference'
                      ? '#fafafa'
                      : theme.mode === 'light'
                      ? '#eaeaeb'
                      : '#575c66',
                }}
              />
            )}

            {/* departure */}

            {Platform.OS === 'ios' ? (
              <InfoText text={'Select your departure timing'}></InfoText>
            ) : (
              <View />
            )}

            {Platform.OS === 'android' ? (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '8%',
                  width: '80%',
                  backgroundColor:
                    theme.mode === 'no-preference'
                      ? '#fafafa'
                      : theme.mode === 'light'
                      ? '#eaeaeb'
                      : '#575c66',
                  borderRadius: 20,
                }}
                onPress={() => setDepShow(true)}>
                <Text
                  style={{
                    color:
                      theme.mode === 'no-preference'
                        ? '#575c66'
                        : theme.mode === 'light'
                        ? '#575c66'
                        : '#eaeaeb',
                  }}>
                  {finalDepartedTime === '' || finalDepartedTime === undefined
                    ? 'Select your departure timing'
                    : finalDepartedTime}
                </Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}

            {Platform.OS === 'android' ? (
              <>
                {depShow ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={(val, vals) => {
                      var start = `${moment(androidTime)
                        .utcOffset('+05:30')
                        .format('HH:mm:ss')}`;
                      var end = `${moment(vals)
                        .utcOffset('+05:30')
                        .format('HH:mm:ss')}`;
                      console.log('android', start, end);
                      if (
                        finalArrievedTime === '' ||
                        finalArrievedTime === undefined
                      ) {
                        Platform.OS === 'android'
                          ? ToastAndroid.show(
                              'Select arrival time first',
                              ToastAndroid.LONG,
                            )
                          : Alert.alert('Select arrival time first');
                        setDepShow(false);
                        return false;
                      } else {
                        if (end < start) {
                          Platform.OS === 'android'
                            ? ToastAndroid.show(
                                'Select time after arrival time',
                                ToastAndroid.LONG,
                              )
                            : Alert.alert('Select time after arrival time');
                          setDepShow(false);
                          return false;
                        } else if (end === start) {
                          Platform.OS === 'android'
                            ? ToastAndroid.show(
                                'Arrival time and departure time should not be same',
                                ToastAndroid.LONG,
                              )
                            : Alert.alert(
                                'Arrival time and departure time should not be same',
                              );
                          setDepShow(false);
                          return false;
                        } else {
                          departureTime(val, vals);
                          setDepShow(false);
                        }
                      }
                    }}
                  />
                ) : (
                  <View />
                )}
              </>
            ) : (
              <TimePicker
                title="Pick a time"
                value={time_2_ios}
                onChange={(val, vals) => {
                  var start = `${moment(checkTime)
                    .utcOffset('+05:30')
                    .format('HH:mm:ss')}`;
                  var end = `${moment(val)
                    .utcOffset('+05:30')
                    .format('HH:mm:ss')}`;
                  console.log('ios', start, end);
                  if (
                    finalArrievedTime === '' ||
                    finalArrievedTime === undefined
                  ) {
                    Platform.OS === 'android'
                      ? ToastAndroid.show(
                          'Select arrival time first',
                          ToastAndroid.LONG,
                        )
                      : Alert.alert('Select arrival time first');
                    return false;
                  } else {
                    if (end < start) {
                      Platform.OS === 'android'
                        ? ToastAndroid.show(
                            'Select time after arrival time',
                            ToastAndroid.LONG,
                          )
                        : Alert.alert('Select time after arrival time');
                      setCheckTime('');
                      return false;
                    } else if (end == start) {
                      Platform.OS === 'android'
                        ? ToastAndroid.show(
                            'Arrival time and departure time should not be same',
                            ToastAndroid.LONG,
                          )
                        : Alert.alert(
                            'Arrival time and departure time should not be same',
                          );
                      setCheckTime('');
                      return false;
                    } else {
                      departureTime(val, vals);
                    }
                  }
                }}
                style={{
                  color:
                    theme.mode === 'no-preference'
                      ? '#fafafa'
                      : theme.mode === 'light'
                      ? '#eaeaeb'
                      : '#575c66',
                }}
              />
            )}

            {/* password input */}
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
                },
              ]}
              placeholderTextColor={
                theme.mode === 'no-preference'
                  ? '#575c66'
                  : theme.mode === 'light'
                  ? '#575c66'
                  : '#eaeaeb'
              }
              placeholder={'Password'}
              selectionColor={'gray'}
              onChangeText={(value) => setPassword(value)}
              value={password}
              autoCapitalize="none"
              returnKeyType={'done'}
              maxLength={30}
              onFocus={() => {}}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              onBlur={() => {}}
              secureTextEntry
              blurOnSubmit={false}></TextInput>

            <CustomButton
              text={'Next'}
              onPress={() => {
                navigation.navigate('FoodTruckMenu');
              }}
            />
          </KeyboardAwareScrollView>
        </Container>
      </BaseLayout>
    );
  } else {
    return (
      <BaseLayout>
        <CardView>
          <Title>Foodlike</Title>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            contentContainerStyle={{
              flexGrow: 1,
              width: config.responsiveScreenWidth(80),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            showsVerticalScrollIndicator={false}>
            <InfoText text={`${text} Registration`}></InfoText>

            {/* name Visitor */}
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
              placeholder={'Name'}
              selectionColor={'gray'}
              onChangeText={(value) => setName(value)}
              value={name}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={300}
              onFocus={() => {}}
              onSubmitEditing={() => {
                mobileRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}></TextInput>

            {/* mobile Visitor */}
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
                },
              ]}
              placeholderTextColor={
                theme.mode === 'no-preference'
                  ? '#575c66'
                  : theme.mode === 'light'
                  ? '#575c66'
                  : '#eaeaeb'
              }
              keyboardType="number-pad"
              placeholder={'Mobile no.'}
              selectionColor={'gray'}
              onChangeText={(value) => setMobileNo(value)}
              value={mobileNo}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={10}
              onFocus={() => {}}
              onSubmitEditing={() => {
                companyRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={mobileRef}></TextInput>

            {/* email foodtruck */}
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
              placeholder={'Email'}
              selectionColor={'gray'}
              onChangeText={(value) => setEmailVisitor(value)}
              value={emailVisitor}
              autoCapitalize="none"
              returnKeyType={'next'}
              maxLength={20}
              onFocus={() => {}}
              onSubmitEditing={() => {
                foodTruckRegRef.current.focus();
              }}
              onBlur={() => {}}
              blurOnSubmit={false}
              ref={companyRef}></TextInput>

            {/* password input */}
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
                },
              ]}
              placeholderTextColor={
                theme.mode === 'no-preference'
                  ? '#575c66'
                  : theme.mode === 'light'
                  ? '#575c66'
                  : '#eaeaeb'
              }
              placeholder={'Password'}
              selectionColor={'gray'}
              onChangeText={(value) => setPassword(value)}
              value={password}
              autoCapitalize="none"
              returnKeyType={'done'}
              maxLength={30}
              onFocus={() => {}}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              onBlur={() => {}}
              secureTextEntry
              blurOnSubmit={false}
              ref={foodTruckRegRef}></TextInput>

            <CustomButton text={'Next'} onPress={() => {}} />
          </KeyboardAwareScrollView>
        </CardView>
      </BaseLayout>
    );
  }
}
export default Registration;

const Container = styled.View`
  background: ${(props) => props.theme.text};
  height: ${JSON.stringify(config.responsiveScreenHeight(85))};
  width: ${JSON.stringify(config.responsiveScreenWidth(85))};
  border-radius: 30px;
  margin: 18px;
  margin-top: 20px;
  box-shadow: 0 18px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  elevation: 8;
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  inputStyle: {
    width: '80%',
    height: config.responsiveScreenHeight(6),
    fontSize: 18,
    paddingHorizontal: 18,
    fontWeight: 'bold',
  },
});

const Title = styled.Text`
  font-size: ${JSON.stringify(config.responsiveScreenFontSize(2.8))};
  font-weight: bold;
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
  top: 10;
  margin-vertical: 5;
`;
