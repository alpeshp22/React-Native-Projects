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
  bodyContainer: {
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: wp(4.8),
    margin: wp(2),
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  iconRightStyle:{
		alignSelf:'center',
	 justifyContent:'center',
	 // backgroundColor:"#ccc",
		borderRadius:0,
		borderWidth:0,
	 },
	 iconStyle:{
	 textAlign:'center', 
	 marginRight:0,	
 
	 },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp(1),
    marginTop: wp(1),
    paddingLeft: wp(1.5),
  },
  name: {
    fontSize: font.SECONDARY_LABLE,
    fontWeight: 'bold',
  },
  statusText:{
    fontSize: font.PRIMARY_LABLE,
    color:color._WHITE,
    letterSpacing:0.3,
    // textAlignVertical:'top',
  },
  book: {
   paddingHorizontal:wp(2),
   paddingVertical:wp(1),
// justifyContent:'center',
// alignItems:'center',
borderRadius:wp(2),

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
  bodyContainer2: {
    marginBottom: wp(1),
  },
  destination: {
    flexDirection: 'row',
    paddingVertical: wp(1.5),
    // paddingTop:wp(3),
  },
  destinationView: {
    flexDirection: 'row',
    justifyContent:'space-between',
    // paddingVertical: wp(1.5),
  },
  icon: {
    fontSize: font.TEXT_SIZE_4,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingTop: wp(1),
  },
  distance:{
    // paddingTop:wp(2),
    paddingVertical: wp(1.5),
    flexDirection:'row'
  },
  pickupPoint: {
    fontSize: font.PRIMARY_TEXT,
    paddingTop:wp(0.5),
  },
    iconLocation: {
    fontSize: font.SECONDARY_TEXT,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingHorizontal: wp(2),
    paddingTop: wp(1),
  },
  iconDistance: {
    fontSize: font.TEXT_SIZE_2,
    // fontSize:30,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingRight: wp(1),
    // paddingTop: wp(1),
  },
  services: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: wp(1.5),
  },
  iconTruck: {
    fontSize: font.TEXT_SIZE_1,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingHorizontal: wp(1),
  },
  serviceText1: {
    fontSize: font.PRIMARY_TEXT,
  },
  rowDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: wp(1),
  },
  dateView: {
    flexDirection: 'row',
    paddingRight:wp(4),
  },
  iconCalender: {
    fontSize: font.TEXT_SIZE_4,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingTop: wp(1),
  },
  date: {
    fontSize: font.PRIMARY_TEXT,
    paddingTop: 1,
  },
  price: {
    fontSize: font.PRIMARY_TEXT,
    fontWeight: 'normal',
    paddingBottom: wp(1),

  },
  priceTag: {
    // fontSize: font.SECONDARY_TEXT,
    // color: color._26395A,
    paddingLeft: wp(1)
  },
  // serviceText: {
  //   fontSize: font.SECONDARY_TEXT,
  //   fontWeight: 'bold',
  // },

  // pickup: {
  //   fontSize: font.SECONDARY_TEXT,
  //   fontWeight: 'bold',
  // },

});
export default styles;
