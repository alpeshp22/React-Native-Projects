import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { font, theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(15));

const styles = StyleSheet.create({

	flex1: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
	},
	btnBack: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: wp(3),
	},
	leftIcon: {
		fontSize: wp(7),
		color: theme.BACKGROUND_ICON_COLOR,
		justifyContent:'center',
		marginTop:wp(5)
	},
	slide1: {
		flex: 1,
		alignItems: 'center',
		paddingTop: wp(5),
		paddingHorizontal: wp(10),
	},
	imgBox: {
		flex: 2.2,
		width: wp(50),
		justifyContent: 'flex-end',
	},
	imageStyle: {
		height: '70%',
		width: '100%',
	},
	subContainer: {
		flex: 0.75,
		marginBottom: 45,
		justifyContent: 'flex-end',
		paddingHorizontal: 15,
	},
	headertext: {
		fontSize: font.TEXT_SIZE_5,
		fontWeight: '700',
		color: theme.BACKGROUND_ICON_COLOR,
		marginBottom: 15,
		lineHeight: 22,
		textAlign: 'center',
	},
	paraTxt: {
		fontSize: font.SECONDARY_TEXT,
		color: theme.BACKGROUND_ICON_COLOR,
		lineHeight: 20,
		textAlign: 'center'
	},
	text: {
		color: theme.BACKGROUND_COLOR,
		fontSize: 22,
		fontWeight: 'bold',
		paddingTop: wp(10),
	},
	button: {
		paddingHorizontal: wp(3.75),
		marginBottom: wp(6.7),
	},
	btn: {
		flexDirection: 'row',
		paddingTop: wp(1),
	},
	text1: {
		color: theme.BACKGROUND_ICON_COLOR,
		fontWeight: 'bold',
		fontSize: wp(4.2),
	},
	icon: {
		color: theme.BACKGROUND_ICON_COLOR,
	},
	body: {
		paddingBottom: 16,
	},
	buttonUpload:{
		borderRadius:wp(20),
		marginHorizontal:wp(7),
		marginBottom: wp(6.7),
	},
	buttonText: {
		color:theme.TEXT_BG_1,
	},

});
export default styles;