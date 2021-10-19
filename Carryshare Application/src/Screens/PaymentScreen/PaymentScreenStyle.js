import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '../../Constants/Color';
import { font, theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(10));
const ITEM_HEIGHT = Math.round(ITEM_WIDTH / wp(1));

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    paddingHorizontal: wp(1),
    backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
  },
  flatListView: {
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: wp(4.8),
    paddingHorizontal: wp(2),
    margin: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2.50),
    paddingTop: wp(2),
    paddingBottom: wp(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2.50),
    paddingBottom: wp(2),
  },
  rowTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    paddingBottom: wp(2),
  },
  iconRow: {
    flexDirection: 'row',

  },
  idView: {
    flexDirection: 'row',
    paddingLeft: wp(0.5),
  },
  titleTxt: {
    fontSize: wp(4),
    fontWeight: '700',

  },
  txt: {
    fontSize: wp(4),
    fontWeight: '600',
    // color: color._26395A,
    paddingLeft: wp(1),
  },
  statusText: {
    fontSize: font.PRIMARY_LABLE,
    color: color._WHITE,
    letterSpacing: 0.3,
    // textAlignVertical:'top',
  },
  book: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    // justifyContent:'center',
    // alignItems:'center',
    borderRadius: wp(2),

  },
  pending: {
    backgroundColor: color._pending,


  },
  booked: {
    backgroundColor: color._3895D3,
  },
  completed: {
    backgroundColor: color._green,
  },
  destination: {
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    paddingBottom: wp(2),
  },
  pickup: {
    fontSize: font.SECONDARY_TEXT,
    fontWeight: 'bold',
    // color: color._26395A,
  },
  pickupPoint: {
    // fontSize: font.SECONDARY_TEXT,
    // color: color._26395A,
    paddingLeft: wp(0.5),
    paddingBottom: wp(0.5),
  },
  dateTxt: {
    // fontSize: font.SECONDARY_TEXT,
    // color: color._26395A,
    paddingLeft: wp(0.5),
  },
  price: {
    // fontSize: font.SECONDARY_TEXT,
    // color: color._26395A,

  },
  priceTag: {
    // fontSize: font.SECONDARY_TEXT,
    // color: color._26395A,
    paddingLeft: wp(1)
  },
  iconLocation: {
    fontSize: font.SECONDARY_LABLE,
    color: '#1261A0',
    paddingHorizontal: wp(2),
    textAlignVertical: 'center',
  },

  iconCalender: {
    fontSize: wp(6),
    color: theme.BACKGROUND_ICON_COLOR,
    textAlignVertical: 'center',

  },
  orderIcon: {
    fontSize: wp(4),
    color: theme.BACKGROUND_ICON_COLOR,
    textAlignVertical: 'center',
    // paddingTop: wp(1),
    // paddingLeft: wp(5)
  },
  iconLocation2: {
    fontSize: wp(6),
    color: theme.BACKGROUND_ICON_COLOR,
    textAlignVertical: 'center',
  },

});
export default styles;
