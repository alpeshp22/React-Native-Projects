import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const styles = StyleSheet.create({
	container: {
		backgroundColor:theme.action_Buttons_BG,
		borderRadius:3,
		paddingVertical:10,
		
	},
	submitBtnContainer: {
		width:'100%',
	},
	bottomBtn:{
		backgroundColor:color._Action_Buttons,
		borderRadius:3,
		paddingVertical:10,
		justifyContent:'flex-end',
		alignContent:'space-between',
		position:'absolute',
		bottom:wp(2),
		width:'100%',
		// left:15,
		// width:'92.3%',
		// marginLeft:15,
		// marginRight:15,
	},
	btnText: {
		color:theme.action_Buttons_Text_Color,
		fontSize:wp(5),
		textAlign:'center',
		fontWeight:'700'
	}, 
	
	

	
});
export default styles;