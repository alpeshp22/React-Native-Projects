import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	mainContainer:{
		// flex:1,
		flexDirection:'row',
		justifyContent:'flex-start'

	},
	checkBox:{
		
	},
	textStyle:{
		marginTop:1,
		marginLeft:10,
		fontSize:wp(4.3),
	},
	uncheckedIcon: {
		color:color.CARD_TEXT_BG_3,
		fontSize:25,
	},
	checkedIcon:{
		color:color.CARD_TEXT_BG_3,
		fontSize:25,
	},
	radioCheckedIcon: {
		color:color._1575ff,
		fontSize:25,
	},
	radioUncheckedIcon:{
		color:color._1575ff,
		fontSize:25,
	},

});
export default styles;

