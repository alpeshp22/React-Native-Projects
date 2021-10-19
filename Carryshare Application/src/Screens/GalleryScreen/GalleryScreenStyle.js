import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(15));

const styles = StyleSheet.create({

	flex1: {
		flex: 1,
	},
	container: {
		flex: 1,
		 backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
	},

	iconRightStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: "#ccc",
		borderRadius: 0,
		borderWidth: 0,
	},
	iconStyle: {
		textAlign: 'center',
		marginRight: 0,
	},
	row: {
		flex: 1,
		paddingHorizontal: 5,
		},
	
	flatListContainer: {
		flex: 1,
		// paddingTop:StatusBar.currentHeight,
		backgroundColor: color._WHITE,
		width: (width / 3) - 7,
		height: 110,
		marginHorizontal: 2,
		marginVertical: 2,
		borderRadius: 10,
		alignItems: 'center',
		maxWidth: (width / 3) - 7,
	},
	// ListContainer: {
	// 	flex: 1,
	// 	},
	serviceFlatList: {
		margin: 5,
		flex: 0.5,

	},
	
	img: {
		position: 'relative',
		height: "100%",
		width: "100%",
		borderRadius: 10,
	},
	///modal
	bodyContainer: {
		flex:1,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
	},
	modalContainer:{
		flex:1,
		maxHeight:150,
		// maxWidth:150,
	},
	imgBox:{
		height:wp(20),
		width:wp(20),
	},
	img:{
		height:'100%',
		width:'100%',
	},
	bannerImg:{
		width: '100%',
		height: '100%',
		
	},
	iconStyle:{
		color:theme.THEME_COLOR_1,
		   paddingTop:wp(1.5),
	
	},
	iconRightStyle:{
		alignSelf:'center',
	 justifyContent:'center',
		borderRadius:0,
		borderWidth:0,
	 },
	 iconStyle:{
	 textAlign:'center', 
	 marginRight:0,	
 
	 },

});
export default styles;