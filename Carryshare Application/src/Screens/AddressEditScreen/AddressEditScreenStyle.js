import {StyleSheet, StatusBar, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Constants/Color';
import {font, theme} from '../../Constants/Theme';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,

	},
	container:{
		padding:wp(3.2),
	},
	bodycontainer:{
		marginBottom:wp(5),
	},
	lableText:{
		color:theme.LABLE_COLOR,
		marginBottom:wp(2),
		fontWeight:'bold',
	},
	dropInputContainer:{
		width: '100%',
		backgroundColor:theme.BACKGROUND_COLOR,
		height: wp(11), 
		borderRadius: wp(0.7), //5,
		paddingLeft: wp(3.75), //10,	
		borderWidth:0.2,
		justifyContent:'center'
	},
	dropdownIcon:{
		right: wp(2.5), //10,
	},
    placeholderStyle:{
		color: theme.PLACEHOLDER_COLOR,
		// fontWeight:'normal',
		fontSize: wp(3.5), //14,
		letterSpacing: wp(0.05),
		opacity:0.5,
	},
	button:{
		marginBottom:wp(1),
		// marginTop:'50%',
		alignItems: 'center',
		marginHorizontal:wp(3),
		backgroundColor: theme.BUTTON_COLOR,
		padding:wp(3.75),
		borderRadius:wp(3),
	},
	textButton:{
		color:color._WHITE,
		fontWeight:'bold',
	},
});
export default styles;