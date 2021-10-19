import { StyleSheet, StatusBar } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { color } from "../../Constants/Color";
import { font, theme } from "../../Constants/Theme";
const styles = StyleSheet.create({
	flex1: {
		flex: 1,
	},
	Container: {
		flex: 1,
		padding: wp(3.75),
		backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
	},
	topContainer: {
		borderWidth: 1,
	},
	dropdowncontainer: {
		marginBottom: wp(5),
		marginTop: wp(3)
	},
	dropdowncontainer2: {
		marginTop: wp(0.75),
	},
	dropInputContainer: {
		width: '100%',
		backgroundColor: color._WHITE,
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
	placeholderStyle: {
		color: theme.PLACEHOLDER_COLOR_1,
		fontWeight: 'normal',
		fontSize: font.PRIMARY_TEXT, //14,
		letterSpacing: wp(0.05),
		opacity: 0.5,
	},
	lableText: {
		color: theme.LABLE_COLOR,
		marginBottom: wp(2),
		fontWeight: 'bold',
	},
	inputField: {
		backgroundColor: theme.BACKGROUND_COLOR,
	},
	inputRow: {
		paddingBottom: wp(3.75),
	},
	inputBox: {
		minHeight: wp(11),
		borderWidth: 1,
		borderColor: theme.PRIMARY_BORDER_COLOR,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: wp(3),
		borderRadius: 5,
		marginTop: wp(1.5),
		backgroundColor: theme.BACKGROUND_COLOR,

	},
	inputTitle: {
		paddingBottom: wp(0.75),
		fontSize: font.PRIMARY_TEXT,
		// fontSize:wp(4),
		fontWeight: '700',
		// letterSpacing: 0.50,
		color: theme.LABLE_COLOR,
	},
	datePlaceHolderTxt: {
		fontSize: font.PRIMARY_TEXT,
		color: theme.PLACEHOLDER_COLOR,
	},
	dateTxt: {
		fontSize: wp(3.75),
		color: theme.PRIMARY_TEXT_COLOR,
	},
	buttonUpload: {
		marginBottom: wp(7),
		marginTop: wp(2.55),
	},

	////// 
	imageContainer: {
		height: wp(90),
		width: wp(91.85),
	},
	imageStyle: {
		height: '100%',
		width: '100%',
		marginTop: 0,
		alignSelf: 'center',
		// transform: [{ rotate: '90deg' }]
	},
	imgDelete: {
		backgroundColor: 'rgba(255,255,255,0.5)',
		width: wp(10),
		height: wp(10),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		position: 'absolute',
		top: wp(1.25),
		right: wp(1.25),
		zIndex: 1024,
	},
	imgDeleteIcon: {
		fontSize: wp(6.25),
		color: color._red,
	},
	
})
export default styles;