import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../Constants/Color';
import { font, theme } from "../../Constants/Theme";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: wp(8),//30
		paddingTop: wp(13),//50
		backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
	},
	input: {
		paddingBottom: wp(5.5),
		flex: 1.5,
		justifyContent: 'flex-end',
		width: '100%',
	},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	TopImageLogo: {
		width: wp(95),
		height: wp(38),
		marginBottom: wp(7),
	},
	inputGroup: {
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputIcon: {
		fontSize: font.TEXT_SIZE_2,//25 
		color: 'black',
	},
	inputContainer1: {
		flex: 2.75,
		height: wp(14),
		marginBottom: 0,
		paddingLeft: wp(1.25),//5

	},
	eyeIcon: {
		fontSize: font.TEXT_SIZE_SECONDARY,
		color: 'black',
		paddingTop: wp(2.5),
	},
	buttonLogin: {
		// marginTop:25,
		marginTop: wp(7),
		alignItems: "center",
		backgroundColor: theme.BUTTON_COLOR,
		paddingHorizontal: wp(2.5),///10
		paddingVertical: wp(1.75),//5
		borderRadius: wp(1.25),
		// marginRight:wp(2),
		// marginLeft:wp(2),
	},
	forgotPassword: {
		width: '100%',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		marginTop: wp(3),
		paddingRight: wp(2),
	},
	forgot: {
		fontSize: wp(4),
	},
	//modal 
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: wp(1),
	},
	modalHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: wp(7),
		paddingTop: wp(5),
	},
	modalInnerItem: {
		paddingHorizontal: wp(3.75),//15
		paddingBottom: wp(3.75),//15
		position: 'relative',
		backgroundColor: theme.BACKGROUND_COLOR,
		borderTopLeftRadius: wp(6.25),//25
		borderTopRightRadius: wp(6.25),//25
	},
	modalClose: {
		alignSelf: 'flex-end',
		justifyContent: 'flex-start',
		marginBottom: wp(13),
		width: '10%',
	},
	modalCloseStyle: {
		fontSize: wp(8),
		alignSelf: 'flex-end',
	},
	modalTitleStyle: {
		fontSize: font.TEXT_SIZE_4,//24
		fontWeight: '700',
		color: theme.PRIMARY_TEXT_COLOR_BLACK,
		textAlign: 'center'
	},

	modalInputContainer: {
		height: wp(12.5), //50,
		marginVertical: wp(2.5), //10,
		marginBottom: wp(10),
		marginHorizontal: wp(5.25),
		fontSize:font.SECONDARY_TEXT,//16

	},
	inputField: {
		borderRadius: wp(2),

	},
	button: {
		height: wp(12), //50,
		marginBottom: wp(3.75), //15,
		marginHorizontal: wp(5), //25,
		borderRadius: wp(2),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.BUTTON_COLOR,
	},
	btnTxt: {
		color: theme.TEXT_BG_1,
		fontSize: font.TEXT_SIZE_SECONDARY,//20
	},
});
export default styles;
