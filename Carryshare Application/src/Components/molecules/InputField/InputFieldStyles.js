import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	inputBoxContainer: {
		marginBottom:wp(2),
	},
	inputLableTaxt: {
		fontSize:wp(4),
		fontWeight:'600',
		marginBottom:wp(2),
		letterSpacing:0.5,
		color:theme.LABLE_COLOR_1,
	},
	InputRow: {
		borderWidth:1,
		borderColor:theme.PRIMARY_BORDER_COLOR,
		height:wp(11),
		borderRadius:3,
		backgroundColor:color._WHITE,
	},
	inputContainer: {
		minHeight:wp(11),
		paddingHorizontal:10,
	}, 
	iconRowpass:{
        position: 'absolute',
		right: 3,
		top:3,
        height: 40,
        width: 35,
        padding: 5,
        flexDirection: 'row',
    },
	

});
export default styles;

