import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	textFieldDefault: {
		height: 40,
		width: '100%',
		// fontFamily:'',
		fontSize: wp(4),
	}

});
export default styles;

