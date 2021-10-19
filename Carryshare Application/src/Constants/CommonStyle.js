import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from './Color';
const WIDTH = Dimensions.get('window').width;

const commonStyle = StyleSheet.create({
  // input
  inputContainerStyle: {
    width: 360,
    borderBottomWidth: 1,
    borderColor: color._999999,
  },
  containerStyle: {
    color: color._000000,
    alignItems: 'center',
  },
  /// add Address input
  containerStyle2: {
    marginBottom: 10,
    paddingHorizontal: 0,
    height: 30,
  },
  inputContainerStyle2: {
    borderBottomWidth: 1,
    borderColor: color._999999,
    height: 30,
  },
  input: {
    fontSize: 14,
    color: color._000000,
    textAlignVertical: 'bottom',
    paddingLeft: 0,
  },
  input2: {
    fontSize: wp(4.5),
    color: color._000000,
    textAlignVertical: 'bottom',
    paddingBottom: 5,
  },

  /// EditProfileInput
  editInput: {
    fontSize: 20,
    color: color._000000,
    textAlignVertical: 'bottom',
    paddingLeft: 0,
    paddingBottom: 0,
  },

  //  GREEN BUTTON STYLE - 1
  buttonContainerStyle: {
    backgroundColor: color._06A10B,
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
  },
  buttonBoxStyle: {},
  buttonTitleStyle: {
    fontSize: 18,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  buttonContainerStyle2: {
    backgroundColor: color._06A10B,
    borderRadius: 10,
  },

  //  GREEN BUTTON STYLE - 2
  buttonTitleStyle2: {
    fontSize: wp(4),
  },

  // Bordered Input Style
  inputLabel: {
    marginTop: 20,
    marginBottom: 8,
    color: color._000000,
    fontSize: wp(4),
  },
  inputBox: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  inputContainer: {
    height: 34,
    borderWidth: 1,
    borderColor: color._DDDDDD,
  },
  inputTxt: {
    fontSize: 14,
    letterSpacing: wp(0.05),
  },
  errorTxt: {
    color: color._EB0000,
  },
  addressButton: {
    backgroundColor: 'transparent',
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  // title Text
  titleText: {
    color: color.THEME_COLOR1,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  ButtonTxt: {
    textTransform: 'uppercase',
  },
});

export default commonStyle;
