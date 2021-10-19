import {StyleSheet, StatusBar,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);

const styles = StyleSheet.create({

	flex1: {
		flex:1,
	},
    container: {
		flex:1,
		// paddingTop:StatusBar.currentHeight,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
	},
	
	ListContainer:{
		flex:1,
		marginTop:wp(5),
	},
	lableText:{
		paddingLeft:wp(5),
		fontWeight:'bold',
		fontSize:wp(3.7),
		marginBottom:wp(2),
	},
	rowItemStyle:{
		marginBottom: 15,
		backgroundColor: theme.PRIMARY_CARD_BG,
		borderRadius: 0,
		// borderBottomWidth:wp(0.2),
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
	rowTitleStyle2:{
		fontSize: wp(3.75),
		color:  'red',
		fontWeight: '700',
	},
	rowRightIconCol:{
			color:theme.PRIMARY_TEXT_COLOR_BLACK,
	},
	
	
	

	
	
    
});
export default styles;