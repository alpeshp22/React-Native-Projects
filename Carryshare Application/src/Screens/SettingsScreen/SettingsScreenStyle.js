import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	bodyContainer: {
		// height: wp(130),
		marginBottom:50,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
		// backgroundColor:theme.PRIMARY_BG,
	},
	topContainer: {
		minHeight:wp(50),
		justifyContent:'center',
		alignItems:'center',
		// marginBottom:30
	},
	imgBox: {
		position:'relative',
		height:wp(30),
		width:wp(30),
		borderWidth:0.9,
		borderRadius:100
	},
	img: {
		height:'100%',
		width:'100%',
		borderRadius:100
	},
	imgContainer:{
		position:'absolute',
		right:-wp(1),
		// bottom:0,
		top:0,
		height:25,
		width:25,
		backgroundColor:theme.BACKGROUND_COLOR,
		borderRadius:50,
		borderWidth:0.9,	
	},
	imgIcon:{
		fontSize:wp(5),
		textAlign:'center',
		textAlignVertical:'center',
		// marginTop:3,
		paddingVertical:2,
		
	},
	bodyInnerItem: {
		paddingHorizontal:15,
		paddingVertical:10,
	},
	rowItemStyle:{
		marginBottom: 15,
		backgroundColor: theme.PRIMARY_CARD_BG,
		borderRadius: 0,
		overflow:"hidden",
		height: wp(12.5),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 1,
	},
	rowItemIcon:{
		fontSize: wp(5),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
	},
	rowTitleStyle:{
		fontSize: wp(3.75),
		color:  theme.PRIMARY_TEXT_COLOR_BLACK,
		fontWeight: '700',
	},
	rowRightIconCol:{
			color:theme.PRIMARY_TEXT_COLOR_BLACK,
	},
	titleStyle:{
		paddingTop:wp(2),
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


	
});
export default styles;