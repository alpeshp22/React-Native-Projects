import {StyleSheet, StatusBar,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
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
	},
	rowBack: {
        alignItems: 'flex-end',
		justifyContent: 'center',
        backgroundColor: theme.Red_BG,
		paddingRight: 10,
		marginLeft:60,
		marginRight:15,
		marginBottom:10,
		height:wp(20.5),
	},
	imgDeleteIcon:{
        fontSize: 35, 
        color: theme.TEXT_BG_1,
	},
	linearGradient:{
		flex:1,
		justifyContent:'center',
		paddingHorizontal:15,
	},
	dateHeader:{
		fontSize:wp(3.75),
		fontWeight:'700',
	}
});
export default styles;