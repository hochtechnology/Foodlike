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
  Modal,
} from 'react-native';

import config from '../config';
import BaseLayout from '../components/BaseLayout';
import CardView from '../components/CardView';
import Heading_1 from '../components/Heading_1';
import InfoText from '../components/InfoText';
import CustomButton from '../components/CustomButton';
import SmallButton from '../components/SmallButtons';
import ThemeManager, {useTheme} from '../ManageThemeProvider';

function FoodTruckMenu({route, navigation}) {
  const theme = useTheme();
  const [modal, showModal] = useState(false);
  return (
    <BaseLayout>
      <CardView>
        <Heading_1 text={'Foodlike'}></Heading_1>

        <SmallButton
          text={'Add menu'}
          onPress={() => {
            showModal(true);
          }}
        />
        <Modal
          transparent={true}
          visible={modal}
          onRequestClose={() => showModal(false)}
          animationType="slide">
          <TouchableOpacity
            onPress={() => showModal(false)}
            style={{
              height: config.height,
              width: config.width,
              opacity: 0.6,
              backgroundColor: '#121212',
              position: 'absolute',
            }}
          />
          <View style={styles.modalDesign}>
            <View
              style={{
                height: '15%',
                width: config.responsiveScreenWidth(80),
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor:
                  theme.mode === 'no-preference'
                    ? `${config.primaryColor}`
                    : theme.mode === 'light'
                    ? `${config.primaryColor}`
                    : `${config.secondaryColor}`,
              }}>
              <Image
                source={require('../assests/foodIcons/food_2.png')}
                style={{
                  height: config.responsiveScreenHeight(8),
                  width: config.responsiveScreenWidth(8),
                  position: 'absolute',
                  left: '10%',
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color:
                    theme.mode === 'no-preference'
                      ? `black`
                      : theme.mode === 'light'
                      ? `black`
                      : `white`,
                }}>
                Menu
              </Text>
            </View>
          </View>
        </Modal>
        <CustomButton text={'Done'} onPress={() => {}} />
      </CardView>
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
});
