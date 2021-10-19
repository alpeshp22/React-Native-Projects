import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	indexContainer:{
		flex: 1,
		marginBottom:wp(5),
    },
    labelCol:{
        // flex: 0.6,
        marginBottom: 5,
	},
	label:{
        color: theme.LABLE_COLOR,
		fontWeight: '700',
		fontSize:wp(4),
    },
    InputCol:{
        // flex: 2.4,
        backgroundColor: '#fff',
		borderColor: '#fff',
		width: '100%',
		borderRadius: 0,
		marginBottom: 0,
		borderWidth:1,
		borderColor:theme.PRIMARY_BORDER_COLOR,
    },
    
    indexInput:{
        textAlignVertical: 'top',
		fontSize: wp(4),
		color:theme.PRIMARY_TEXT_COLOR_BLACK,
		borderStyle: 'solid',
        minHeight: 100,
        maxHeight: 'auto',
		paddingLeft: 10,
		borderColor:theme.PRIMARY_BORDER_COLOR,
    },
    

});
export default styles;

