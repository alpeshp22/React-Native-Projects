import { StyleSheet, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { color } from "../../Constants/Color";
import CommonStyles from "../../Constants/CommonStyle";
import { theme } from "../../Constants/Theme";
const styles = StyleSheet.create({
	mainContainer: {
		// paddingHorizontal: 10,
		backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
		backgroundColor: theme.BACKGROUND_COLOR,
	},
	containerView: {
		flex: 1,
		// justifyContent:'flex-start',
	},
	container: {
		padding: 15,
	},
	bodycontainer: {
		marginBottom: wp(5),
	},
	lableText: {
		fontSize: wp(4),
		fontWeight: '600',
		marginBottom: wp(2),
		letterSpacing: 0.5,
		color: theme.LABLE_COLOR_1,
	},
	buttonView: {
		paddingHorizontal: wp(3.75),
		marginBottom:wp(3.75),
		// marginBottom: wp(40),
justifyContent:'flex-end',

	},
	button: {
		marginBottom: 10,
		marginTop: 10,
		alignItems: "center",
		backgroundColor: theme.BUTTON_COLOR,
		padding: 10,
		height: wp(11),
		borderRadius: wp(1.5),
	},
	textButton: {
		color: theme.TEXT_BG_1,
		fontWeight: 'bold',
	},
	userIcon: {
		flex: 0.35,
		fontSize: wp(6),

	},
	dropInputContainer: {
		width: '100%',
		backgroundColor: theme.BACKGROUND_COLOR,
		paddingLeft: 0, //10,
		height: wp(11),
		borderRadius: wp(0.7), //5,
		paddingLeft: wp(3.75), //10,	
		borderWidth: 0.2,
		justifyContent: 'center'
	},
	dropdownIcon: {
		right: wp(2.5), //10,
	},
	listStyle: {
	},

	placeholderStyle: {
		color: theme.PLACEHOLDER_COLOR_1,
		fontWeight: 'normal',
		fontSize: wp(3.5), //14,
		letterSpacing: wp(0.05),
		opacity: 0.5,
	},
	dropeDownView: {
		paddingHorizontal: wp(6.25),
		marginTop: wp(12.5), //50
	},
	inputContainerStyle: {
		borderColor: color._ccc,
	},
	infoText: {
		width: '90%',
		fontSize: wp(4),
		marginVertical: 10,
		letterSpacing: 0.5,
		lineHeight: 25,
		fontWeight: '600',
	},
	textinfo2: {
		width: '90%',
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: wp(4),
		// paddingLeft:wp(7),
		paddingVertical: wp(1),
		color: '#7F7F7F',
		letterSpacing: 0.5,
		lineHeight: 25,
	},
	textinfo: {
		width: '90%',
		textAlign: 'center',
		alignSelf: 'center',
		fontSize: wp(4),
		paddingVertical: wp(1),
		color: '#7F7F7F',
		letterSpacing: 0.5,
		lineHeight: 25,
	},
});
export default styles;
