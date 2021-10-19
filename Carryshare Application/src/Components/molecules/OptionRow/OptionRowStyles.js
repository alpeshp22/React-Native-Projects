import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#fff',
		borderRadius:wp(2.5),
		width: '100%',
		height:wp(15),
		justifyContent: 'center',
		alignSelf: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	subContainer: {
		flex: 1,
		flexDirection:'row',
	},
	iconColLeft:{
		flex: 0.4,
		alignItems: 'center',
		justifyContent: 'center',
	
	},
	txtCol:{
		flex: 2.3,
		justifyContent: 'center',
	},
	iconColRight:{
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center',
		

	},
	titleTxt:{
		fontSize: 14,
		color: '#737373',
	},
	leftMargin:{
		marginLeft: 10
	}
});
export default styles;

