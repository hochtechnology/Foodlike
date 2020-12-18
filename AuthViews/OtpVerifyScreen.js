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
import CustomTextInput from '../components/CustomTextInput';
import ThemeManager, {useTheme} from '../ManageThemeProvider';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {NavigationHelpersContext} from '@react-navigation/native';

function OtpVerify({route, navigation}) {
  const [code, setCode] = useState('');
  const theme = useTheme();

  return (
    <BaseLayout>
      <CardView>
        <Heading_1 text={'Foodlike'}></Heading_1>

        <InfoText
          text={'Enter your verification code send to your phone.'}></InfoText>

        <OTPInputView
          style={{width: '80%', height: 100}}
          pinCount={4}
          code={code}
          onCodeChanged={(code) => {
            setCode(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor:
              theme.mode === 'no-preference'
                ? '#fafafa'
                : theme.mode === 'light'
                ? '#eaeaeb'
                : '#575c66',
            color:
              theme.mode === 'no-preference'
                ? '#575c66'
                : theme.mode === 'light'
                ? '#575c66'
                : '#eaeaeb',
            fontWeight: 'bold',
          }}
          codeInputHighlightStyle={{
            borderColor:
              theme.mode === 'no-preference'
                ? config.secondaryColor
                : theme.mode === 'light'
                ? config.secondaryColor
                : '#6762F5',
            borderWidth: 2,
          }}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          placeholderTextColor={'red'}
        />
        <CustomButton
          text={'Verify otp'}
          onPress={() => navigation.navigate('Designation')}
        />

        <TouchableOpacity onPress={() => setCode('')}>
          <Title>Resend otp</Title>
        </TouchableOpacity>
      </CardView>
    </BaseLayout>
  );
}
export default OtpVerify;

const Title = styled.Text`
  font-size: 16;
  color: ${(props) => (props.theme.text === '#575c66' ? '#eaeaeb' : '#575c66')};
`;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
