import { StyleSheet, StatusBar, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '../../Constants/Color';
import { font, theme } from '../../Constants/Theme';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
  },
  topContainer: {
    minHeight: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBox: {
    height: wp(30),
    width: wp(30),
    borderRadius: 100,
    borderWidth: 0.9,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 100
  },
  imgContainer: {
    position: 'absolute',
    right: -wp(1),
    top: 0,
    height: 25,
    width: 25,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 50,
    borderWidth: 0.9,
  },
  imgIcon: {
    fontSize: wp(5),
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 2,

  },
  userText: {
    // marginTop: wp(3),
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: font.SECONDARY_LABLE,
  },
  ratingView:{
    flexDirection:'row',
    marginTop: wp(3),

  },
  starIcon: {
    color: color._ICONCOLOR4,
    fontSize: wp(5),
    paddingLeft:wp(1),
    textAlignVertical:'center',

  },
  ratingText: {
    // marginVertical: wp(3),
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: font.PRIMARY_LABLE,
    
    textAlignVertical:'center',
  },
  walletText: {
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: font.SECONDARY_TEXT,
  },
  balanceView:{
    flexDirection:'row',
  },

  
  infoContainer: {
    flex: 1,
  },
  addressContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(1.5),
    justifyContent: 'space-between',
  },
  inputText: {
    marginHorizontal: wp(3),
    marginVertical: wp(2.7),
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    marginVertical: wp(1),
    backgroundColor: theme.BACKGROUND_COLOR,
  },
  labelTxt2: {
    marginHorizontal: wp(3),
    marginVertical: wp(2),
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '93%',
    backgroundColor: theme.BACKGROUND_COLOR,
  },
  inputTxt: {
    color: color._lable_Light_Color,
  },
  editIcon: {
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: wp(5),
    paddingVertical: wp(3),
  },
 
  editIcon1: {
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: wp(5),
    marginHorizontal: wp(2),
    paddingVertical: wp(3),
  },
  checkIcon: {
    marginHorizontal: wp(2),
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
    fontSize: wp(5),
    paddingVertical: wp(3),
  },

  inputTxt1: {
    color: theme.TEXT_BG_3,
    marginHorizontal: wp(1.5),
    paddingVertical: wp(3),

  },
  bottomView: {
    marginHorizontal: wp(2),
    paddingVertical: wp(2),
  },
  inputTxt2: {
    color: theme.TEXT_BG_3,
    fontSize: font.SECONDARY_TEXT,
  },


  verificationContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp(1.5),
    backgroundColor: theme.BACKGROUND_COLOR,
    justifyContent: 'space-between',
  },
  switch: {
  },
  iconBtn: {
    flex: 1,
    width: '10%',
  },
  info: {
    margin: wp(2),
    fontSize: wp(5),
    opacity: 0.3,
  },
  name: {
    fontWeight: 'bold',
    fontSize: wp(6),
    paddingLeft: wp(30),
    color:theme.PRIMARY_TEXT_COLOR_BLACK,
  },
  profile: {
    fontSize: wp(4),
    paddingLeft: wp(42),
    marginTop: wp(1),
    opacity: 0.3,
    color: theme.PRIMARY_TEXT_COLOR_BLACK,
  },
});
export default styles;
