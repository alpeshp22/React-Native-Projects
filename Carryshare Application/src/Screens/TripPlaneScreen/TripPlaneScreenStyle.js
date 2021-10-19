import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(10));
const ITEM_HEIGHT = Math.round(ITEM_WIDTH / wp(1));

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
	},
	mainContainer: {
		paddingHorizontal: 15,
		flex: 1,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
	},
	inputBox: {
		minHeight: wp(11),
		borderWidth: 1,
		borderColor: color._BORDER_COLOR,
		backgroundColor: theme.BACKGROUND_COLOR,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: wp(2.5),
		borderRadius: wp(1.25),
		marginTop: wp(0.5),
	},
	googleTxtContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0)',
		borderTopWidth: 0,
		borderBottomWidth: 0,
		width: '100%',
		// marginBottom: wp(2), //8,
		borderWidth: 1,
		borderColor: theme.PRIMARY_BORDER_COLOR,
	},

	pickerContainer: {
		borderRadius: wp(0.25), //5,
		borderBottomWidth: wp(0.25), //1,
		borderColor: color._GREYFONT,
		width: '100%',

	},
	inputRow: {
	

	},
	sliderValue: {
		fontSize:wp(4),
		fontWeight:'700',
		color:theme.LABLE_COLOR,
	},
	sliderTitle: {
		fontSize:wp(4),
		fontWeight:'700',
		marginBottom:wp(2),
		color:theme.LABLE_COLOR,
	},
	inputTitle: {
		fontSize:wp(4),
		fontWeight:'700',
		marginBottom:wp(2),
		marginHorizontal:wp(1),
		marginTop:wp(2),
		color:theme.LABLE_COLOR,
	},
	dateTxt: {
		fontSize: wp(4),
		color: theme.PRIMARY_TEXT_COLOR,
	},
	datePlaceHolderTxt: {
		fontSize: wp(4),
		color: theme.PRIMARY_BACKGROUND_COLOR,
	},
	inputRow2: {

	},
	inputField: {
		backgroundColor: theme.BACKGROUND_COLOR,
		borderRadius:wp(1.25),

	},
	button:{
		marginBottom:wp(2.5),
		marginTop:wp(2.5),
		alignItems: "center",
		backgroundColor: theme.BUTTON_COLOR,
		padding: wp(2.5),
		borderRadius:wp(3),
		height:wp(12),
	},
	text:{
		color:theme.TEXT_BG_1,
		fontWeight:'bold',
		paddingTop:wp(0.75),
	},
	dayBox:{
		height: wp(7.5),
		flexDirection:'row',
		paddingVertical:wp(5),
		paddingHorizontal:wp(2),
		borderWidth: 1,
		borderRadius: 1,
		borderColor: color._ccc,
		borderRadius: wp(1.25),
		justifyContent:'space-between',
		alignItems:'center',
		width: width/2 - 30,
		marginRight:wp(2.5),
		backgroundColor:theme.BACKGROUND_COLOR,
	},
	dayTitle:{
		paddingLeft:wp(2.5),

	},
	dayChecked:{
		fontSize: wp(7.5),
		// fontWeight:'700',
		color: color._emeraldgreen,
		paddingLeft:4
	},
	columnWrapperStyle:{
		flex: 1,
		// justifyContent: "space-around"
		marginBottom:wp(2.5),
	},


});
export default styles;