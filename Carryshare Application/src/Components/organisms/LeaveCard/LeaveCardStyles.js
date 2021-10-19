import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";
import { theme } from '../../../Constants/Theme';

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		// marginBottom: 10,
		// marginHorizontal: 10,
		// backgroundColor:'#ccc',
		
	},
	listRow:{		
		flexDirection: 'row',
		paddingHorizontal:15,
	},	

	assignListContainer:{
		minHeight: 80,
		width: ITEM_WIDTH,
		// borderTopRightRadius: 7,
		// borderBottomRightRadius: 7,
		paddingVertical:10,
		// paddingHorizontal: 15,
		width:'100%',
		position: 'relative',
		justifyContent:'space-between',
		// marginBottom:10,
		backgroundColor:color._WHITE,
		borderBottomColor:color._BORDER_COLOR,
		borderBottomWidth:1,
		flexDirection:'row',
		// backgroundColor:'#ff0',
	},
	col1:{
		
	},
	topView:{
		flexDirection:'row',
		alignContent:'space-between'
	},
	titleTxt:{
		fontSize:wp(3.8),
		fontWeight: '700',
		color: color._BLACK,
	},
	leaveType:{
		fontSize:wp(3.5),
		fontWeight: '600',
		color:'#000',
			fontSize:wp(3.5),
		fontWeight: '600',
	},
	date:{
		fontSize:wp(3.5),
		fontWeight: '600',
		color: color._PlaceholderColor,
		marginTop:2,
	},
	statusContainer: {
		position:'relative',
		
		width:wp(16),
	},
	status:{
		fontSize:wp(3.5),
		fontWeight: '700',
		backgroundColor:color._00a68f,
		borderRadius:5,
		paddingHorizontal:5,
		paddingVertical:2,
		color:color._WHITE,
		
		position:'absolute',
		bottom:5,

		// width: 10,
		// height: 10,
		// borderRadius: 100,
		// backgroundColor: '#228b22',
		// position: 'absolute',
		// right: 5,
		// top: 2,
	},
	duration:{
		fontSize:wp(3.5),
	},
	col2: {
		flexDirection:'row',
		justifyContent:'space-between'
	},
	iconView: {
		justifyContent:'center',
		position:'absolute',
		right:0,
		top:'45%'

	},
	iconStyle: {
		fontSize:wp(9),
		color:theme.PRIMARY_BORDER_COLOR,
		marginRight:-5,
		marginLeft:5,

	},
	/////
	attendanceContainer: {
		marginBottom:wp(2.50),
		marginTop:wp(1.25),
		paddingHorizontal:15,
		height:wp(30)
	},
	attendanceCardMain: {
		backgroundColor:color._WHITE,
		paddingHorizontal:15,
		paddingRight:27,
		paddingVertical:10,
		borderRadius:10,
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		position:'relative',
		height:wp(30)
	},
	attendanceCardTitle: {
		flexDirection:'row',
		justifyContent:'space-between',
		marginBottom:5,
	},
	attendanceCardStyle: {
		fontSize:wp(4),
		fontWeight:'700',
	},
	attendanceInOut: {
		flexDirection:'row',
		justifyContent:'space-between',
		marginBottom:5,
	},
	attendanceInOutInner: {
		flexDirection:'row'
	},
	attendanceInOutTitle: {
		color:color._lable_Light_Color_2,
		fontSize:wp(3.5),
		marginRight:5,
		fontWeight:'700',
	},
	attendanceInOutTime: {
		color:color._BLACK,
		fontSize:wp(3.5),
	},
	statusText:{
		color:theme.CARD_TEXT_BG_3,
		fontWeight:'700',
		fontSize:14
	},

	

});
export default styles;

