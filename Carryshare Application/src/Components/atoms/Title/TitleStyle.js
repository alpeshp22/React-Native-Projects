import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	Container: {
		// backgroundColor:theme.CARD_TITLE_BG,
		paddingHorizontal:15,
		paddingVertical:10,
		borderTopLeftRadius:5,
		borderTopRightRadius:5,
	},
	titleTxt: {
		fontSize:wp(3.8),
		fontWeight:'700'
	},


});
export default styles;

