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
} from 'react-native';
import ThemeManager, {useTheme} from './ManageThemeProvider';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
const {height, width} = Dimensions.get('window');

exports.primaryColor = '#ffe135';

exports.secondaryColor = 'tomato';

exports.height = height;
exports.width = width;

exports.responsiveScreenHeight = responsiveScreenHeight;
exports.responsiveScreenWidth = responsiveScreenWidth;
exports.responsiveScreenFontSize = responsiveScreenFontSize;
