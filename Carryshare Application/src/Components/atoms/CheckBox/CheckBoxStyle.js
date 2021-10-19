import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	toDoListBulletIcon: {
		color:theme.CARD_TEXT_BG_3,
		fontSize:25,
	},
	checkedIcon:{
		color:theme.CARD_TEXT_BG_3,
		fontSize:25,
	},

});
export default styles;

