import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";
import { theme } from "../../../Constants/Theme";
export default styles = StyleSheet.create({
	// Is  CSS
	mainContainer: {
		alignSelf: 'flex-start',
		paddingTop: wp(3.75),
		flex: 1
	},
	labelTxt: {
		marginLeft: 10,
	},
	inputRow: {
		paddingTop: wp(3.75), //15,
	},
	titleTxt: {
		paddingBottom: 10,
		fontSize: wp(3.75),
		fontWeight: '700',
		letterSpacing: 0.50,
		color: theme.LABLE_COLOR,

	},
	inputRow2: {
		paddingTop: wp(3.75), //15,
		marginTop: wp(12),

	},


});
