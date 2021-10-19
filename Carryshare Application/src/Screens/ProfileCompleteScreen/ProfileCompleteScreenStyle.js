import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";

const styles = StyleSheet.create({
	flex1:{
		flex:1,
	},
	container: {
		padding:15,
	},
	bodyContainer: {
		// marginBottom:20,
	},
	topContainer: {
		minHeight:wp(40),
		justifyContent:'flex-end',
		alignItems:'center',
		marginBottom:10,
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
		paddingVertical:2,
	},
	imgBox: {
		height:wp(30),
		width:wp(30),
		borderRadius:100,
		borderWidth:0.9,
	},
	img: {
		height:'100%',
		width:'100%',
		borderRadius:100
	},
	dropInputContainer:{
		width: '100%',
		backgroundColor:theme.BACKGROUND_COLOR,
		height: wp(11), 
		borderRadius: wp(0.7), //5,
		paddingLeft: wp(3), //10,	
		borderWidth:0.2,
		justifyContent:'center'
	},
	dropdownIcon:{
		right: wp(2.5), //10,
	},

	placeholderStyle:{
		color: theme.PLACEHOLDER_COLOR_1,
		fontWeight:'normal',
		fontSize: wp(3.5), //14,
		letterSpacing: wp(0.05),
		opacity:0.5,
	},
	dropeDownView:{
		paddingHorizontal:wp(6.25),
		marginTop: wp(12.5), //50
	},
	dropdown:{
		marginBottom:wp(5),
	},
	lableText:{
		color:theme.LABLE_COLOR,
		marginBottom:wp(2),
		fontWeight:'bold',
	},
	
	button:{
		// marginBottom:100,
		marginTop:10,
		alignItems: "center",
		backgroundColor: theme.BUTTON_COLOR,
		padding: 10,
		borderRadius:wp(3),
		margin:15
	},
	textButton:{
		color:color._WHITE,
		fontWeight:'bold',
	},
	addressbar:{
	minHeight:wp(20),
	borderWidth:1,
	borderWidth:1,
	borderColor:theme.PRIMARY_BORDER_COLOR,
	borderRadius:3,
	paddingLeft:wp(3),
	textAlignVertical:'top',
	backgroundColor:theme.BACKGROUND_COLOR,
	},
	addressContainer:{
		marginBottom:wp(10),
	},
	dropdownContainer:{
	backgroundColor:theme.BACKGROUND_COLOR,
	},


	
});
export default styles;