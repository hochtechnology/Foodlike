import React, {useEffect, useState, Children} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import config from '../config';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from '../ManageThemeProvider';

const AlertModal = (props) => {
  const theme = useTheme();
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      animationType="fade">
      <TouchableOpacity
        onPress={props.onRequestClose}
        style={{
          height: config.height,
          width: config.width,
          opacity: 0.6,
          backgroundColor: '#121212',
          position: 'absolute',
        }}
      />
      <View
        style={{
          alignSelf: 'center',
          height: config.height / 5,
          backgroundColor:
            theme.mode === 'no-preference'
              ? '#fafafa'
              : theme.mode === 'light'
              ? '#eaeaeb'
              : '#575c66',
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: config.height / 2.5,
          borderRadius: 20,
          overflow: 'hidden',
          zIndex: 2,
          justifyContent: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color:
              theme.mode === 'no-preference'
                ? '#575c66'
                : theme.mode === 'light'
                ? '#575c66'
                : '#eaeaeb',
            marginVertical: '5%',
          }}>
          {props.text}
        </Text>

        <TouchableOpacity
          onPress={props.onYesPress}
          style={{
            position: 'absolute',
            right: '5%',
            bottom: '8%',
            backgroundColor:
              theme.mode === 'no-preference'
                ? config.secondaryColor
                : theme.mode === 'light'
                ? config.secondaryColor
                : '#6762F5',
            width: config.responsiveScreenWidth(18),
            height: config.responsiveScreenHeight(6),
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: Platform.OS === 'android' ? 80 : 100,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 80,
            shadowRadius: 10,
            shadowOpacity: 0.5,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            shadowColor:
              theme.mode === 'no-preference'
                ? config.secondaryColor
                : theme.mode === 'light'
                ? config.secondaryColor
                : '#6762F5',
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: config.responsiveScreenFontSize(2.0),
              fontWeight: 'bold',
            }}>
            {props.buttonYesText}
          </Text>
        </TouchableOpacity>

        {props.hideNo ? (
          <View />
        ) : (
          <TouchableOpacity
            onPress={props.onNoPress}
            style={{
              position: 'absolute',
              right: '35%',
              bottom: '8%',
              backgroundColor:
                theme.mode === 'no-preference'
                  ? config.secondaryColor
                  : theme.mode === 'light'
                  ? config.secondaryColor
                  : '#6762F5',
              width: config.responsiveScreenWidth(18),
              height: config.responsiveScreenHeight(6),
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: Platform.OS === 'android' ? 80 : 100,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 80,
              shadowRadius: 10,
              shadowOpacity: 0.5,
              shadowOffset: {
                height: 3,
                width: 3,
              },
              shadowColor:
                theme.mode === 'no-preference'
                  ? config.secondaryColor
                  : theme.mode === 'light'
                  ? config.secondaryColor
                  : '#6762F5',
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: config.responsiveScreenFontSize(2.0),
                fontWeight: 'bold',
              }}>
              {props.buttonNoText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  alertModalDesign: {
    alignSelf: 'center',
    height: config.height / 5,
    backgroundColor: 'white',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: config.height / 2.5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
    zIndex: 2,
  },
  heading2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});
