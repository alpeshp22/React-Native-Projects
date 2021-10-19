import { StyleSheet, StatusBar } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { color } from "../../Constants/Color";
import  CommonStyles from "../../Constants/CommonStyle";
import { theme } from "../../Constants/Theme";
const styles = StyleSheet.create({
	mainContainer: {
		// paddingHorizontal: 10,
		backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
		flex:1,
	},
	container:{
		flex:1.7,
		padding:15,
	},
	buttonContainer:{
		justifyContent:'flex-end',
	},
	button:{
		margin:wp(4),
		alignItems: 'center',
		backgroundColor: theme.BUTTON_COLOR,
		padding: wp(3),
		borderRadius:wp(3),
	},
	textButton:{
		color:theme.TEXT_BG_1,
		fontWeight:'bold',
	},
	
});
export default styles;
