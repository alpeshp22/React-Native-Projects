import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#fff',
		borderRadius:wp(2.5),
		width: '100%',
		height:wp(9),
		// paddingHorizontal:5,
		justifyContent:'space-between',
		alignSelf: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		flexDirection:'row',
		borderBottomColor:color._BORDER_COLOR,
		borderBottomWidth:1,
		paddingBottom:10,
		marginVertical:10
	},

	titleTxt:{
		fontSize:wp(4.75),
		fontWeight:'600',
		letterSpacing:0.5,
		color:'#000'
	},
	
});
export default styles;

