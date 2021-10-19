import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	
	inputContainer: {
		borderColor:theme.PRIMARY_BORDER_COLOR,
		height:wp(9),
		width:'99%',
		margin:0,
		textAlignVertical:'top',
		paddingTop:0,
		textAlign:'right',
		paddingRight:wp(10),
	}, 
	
	editProfileInner: {
		flexDirection:'row',
		justifyContent:'flex-start',
		marginBottom:10,
		borderBottomWidth:1,
		borderBottomColor:theme.PRIMARY_BORDER_COLOR,
	},
	editProfileText: {
		fontSize:wp(4),
		fontWeight:'700',
	},
	editProfileTxt: {
		fontSize:wp(3.8),
		color:color._999999,
	},

});
export default styles;

