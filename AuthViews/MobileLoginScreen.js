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

import CustomTextInput from '../components/CustomTextInput';

function MobileLogin({route, navigation}) {
  const [mobileNo, setMobileNo] = useState('');

  return (
    <BaseLayout>
      <CardView>
        <Heading_1 text={'Foodlike'}></Heading_1>

        <InfoText
          text={
            'Enter your mobile no and we will send you a verification code.'
          }></InfoText>
        <View style={{marginVertical: '3%'}} />

        <CustomTextInput
          placeholder={'Enter mobile'}
          selectionColor={'gray'}
          onChangeText={(value) => setMobileNo(value)}
          value={mobileNo}
          autoCapitalize="none"
          returnKeyType={'done'}
          keyboardType="number-pad"
          maxLength={10}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />

        <View style={{marginVertical: '5%'}} />
        <CustomButton
          text={'Send'}
          onPress={() => navigation.navigate('Otp')}
        />
      </CardView>
    </BaseLayout>
  );
}
export default MobileLogin;
