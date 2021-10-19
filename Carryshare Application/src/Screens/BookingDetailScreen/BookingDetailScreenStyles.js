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
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
  },
  bodyContainer: {
    // backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: wp(3),
    margin: wp(2),
    paddingHorizontal: wp(2),
    marginTop: wp(6),
    paddingBottom: wp(6),
  },
  header: {
    flexDirection: 'row',
    paddingTop: wp(2),
    justifyContent: 'space-between',
  },
  title: {
    flexDirection: 'column',
    // color: color._BLACK,
    paddingTop: wp(2),

  },
  name: {
    fontSize: wp(5.5),
    color: theme.BUTTON_COLOR,
    fontWeight: 'bold',
    paddingLeft:wp(1),
  },
  info: {
    flexDirection: 'column',

  },
  price: {
    fontWeight: 'bold',
    fontSize: font.TEXT_SIZE,
    paddingTop: wp(3),
    paddingHorizontal:wp(2),
  },
  destination: {
    flexDirection: 'column',
    marginTop: wp(1),
    height: wp(18),
    paddingHorizontal: wp(2),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.PRIMARY_BACKGROUND_COLOR,
  },
  pickup: {
    fontSize: font.SECONDARY_TEXT,
    justifyContent: 'space-between',
    marginTop: wp(1),
    opacity: 0.3,
  },
  discription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'column',
    // backgroundColor: color._WHITE,
    marginTop: wp(1),
    height: wp(30),
    paddingHorizontal: wp(2),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.PRIMARY_BACKGROUND_COLOR,
  },
  paymentDetail: {
    flexDirection: 'column',
    // backgroundColor: color._WHITE,
    marginTop: wp(1),
    height: wp(30),
    paddingHorizontal: wp(2),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.PRIMARY_BACKGROUND_COLOR,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusTxt: {
    marginTop: wp(1),
  },
  status1: {
    color: 'green',
  },
  line: {
    color: color._BLACK,
  },

  status2: {
    color: 'red',
  },
  button: {
    marginBottom: wp(2),
    marginTop: wp(2),
    alignItems: 'center',
    backgroundColor: theme.BUTTON_COLOR,
    padding: wp(2),
    borderRadius: wp(3),
  },
  text1: {
    color: theme.TEXT_BG_1,
    fontWeight: 'bold',
  },
  text2: {
    color: theme.TEXT_BG_1,
    fontWeight: 'bold',
  },


  bottomBox: {
		justifyContent: 'center',
		flexDirection: 'row',
		shadowColor: "#000",
		padding: wp(3),
		paddingHorizontal: wp(5)

	},
  btnItem: {
    backgroundColor:theme.BUTTON_COLOR_1,
		width: '50%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
		minHeight: wp(10),
		// marginTop:wp(5),
		// borderTopRightRadius: 25,
		// borderRadius: 25,
		// marginRight:wp(3),
		paddingHorizontal: 20,
		borderTopLeftRadius: 25,
		borderBottomLeftRadius: 25,

	},
  btnTxt: {
		fontSize: wp(4),
		color: color._WHITE,
		paddingRight:5,
	},
  btnBox: {
		width: '50%',
    backgroundColor:theme.BUTTON_COLOR_1,
		minHeight: wp(10),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		// marginLeft: 2,
		borderLeftWidth: 0.5,
		borderLeftColor: color._WHITE,
		alignSelf: 'flex-end',
		borderTopRightRadius: 25,
		borderBottomRightRadius: 25,

	},
});

export default styles;
