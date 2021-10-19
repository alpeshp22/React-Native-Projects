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
  bodyContainer2: {
    marginBottom: wp(1),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: wp(1),
    marginTop: wp(1),
    paddingLeft: wp(1.5),
  },

  destination: {
    flexDirection: 'row',
    paddingVertical: wp(1.5),
  },
  services: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: wp(1.5),
  },
  rowDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: wp(1),
  },
  dateView: {
    flexDirection: 'row',
  },
  serviceText: {
    fontSize: font.SECONDARY_TEXT,
    fontWeight: 'bold',
  },
  serviceText1: {
    fontSize: font.PRIMARY_TEXT,
  },
  pickup: {
    fontSize: font.SECONDARY_TEXT,
    fontWeight: 'bold',
  },
  pickupPoint: {
    fontSize: font.PRIMARY_TEXT,
    paddingTop:wp(0.5),

  },
  name: {
    fontSize: font.SECONDARY_LABLE,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',

  },
  price: {
    fontSize: font.PRIMARY_TEXT,
    fontWeight: 'normal',
    paddingBottom: wp(1),

  },
  priceTag: {
    paddingLeft: wp(1)
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
  date: {

    fontSize: font.PRIMARY_TEXT,
    paddingTop: 1,
  },

  iconLocation: {
    fontSize: font.SECONDARY_TEXT,
    color: theme.BACKGROUND_ICON_COLOR,
    paddingHorizontal: wp(2),
    paddingTop: wp(1),
  },
  iconCalender: {
    fontSize: wp(6),
    color: theme.BACKGROUND_ICON_COLOR,
    paddingTop: wp(1),
  },

  iconTruck: {
    fontSize: wp(4.5),
    color: theme.BACKGROUND_ICON_COLOR,
    paddingHorizontal: wp(1),
  },
  icon: {
    fontSize: wp(6),
    color: theme.BACKGROUND_ICON_COLOR,
    paddingTop: wp(1),
  },
  rowBack: {
    marginTop:wp(1.25),
        alignItems: 'flex-end',
    justifyContent: 'flex-end',
        // backgroundColor: theme.CARD_TEXT_BG_3,
        backgroundColor:'#0075bf',
  
    marginLeft:60,
    marginRight:15,
    marginTop:10,
    // height:wp(30) ,  ///117,
  height:wp(31),
  
    flexDirection:'row',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    
  
  },
  acceptBtn:{
    alignItems: 'center',
    justifyContent: 'center',
        backgroundColor: color._emeraldgreen,
    paddingHorizontal:wp(5),
    width:wp(15),
    height:wp(31),  
  },
  acceptText:{
    color:color._WHITE,
    fontSize:wp(6)
  },
  cancelText:{
    color:color._WHITE,
    fontSize:wp(6)
  },
  cancelBtn:{
    alignItems: 'center',
    justifyContent: 'center',
        backgroundColor: 'red',
    paddingHorizontal:wp(3),
    color:color._WHITE,

    width:wp(15),
    height:wp(31),

    borderBottomRightRadius:10,
    borderTopRightRadius:10,
  
  },
  iconRightStyle:{
		alignSelf:'center',
	//  justifyContent:'center',
		borderRadius:0,
		borderWidth:0,
	 },
	 iconStyle:{
	 textAlign:'center', 
	 marginRight:0,	
 
	 },

});
export default styles;
