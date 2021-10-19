import {StyleSheet, StatusBar,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(15));

const styles = StyleSheet.create({

	flex1: {
		flex:1,
	},
	 container: {
		flex:1,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
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
	 bannerImg:{
		width: '100%',
		height: '100%',
		
	},



	
	
	
	
	
	
	

	
	
    
});
export default styles;