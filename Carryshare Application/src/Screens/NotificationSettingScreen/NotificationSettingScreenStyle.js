import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);

const styles = StyleSheet.create({

	container: {
		flex: 1,
		 backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
	},
	ListContainer: {
		flex: 1,
	},
	serviceFlatList2:{
		marginBottom:wp(20),
	},

	row:{
		flexDirection:'row',
		justifyContent:'space-between',
		height: wp(11),
		alignItems:'center',
		backgroundColor:color._WHITE,

		
	},
	titleTxt:{
		fontWeight:'700',
		fontSize:wp(4),
	},
	row1:{
		flexDirection:'row',
		justifyContent:'space-between',
		width:'90%'	,
		paddingHorizontal:wp(3.5)
	},
	lockIconView:{
		width:'10%',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:color._WHITE,

		paddingLeft:20
	},
	lockIcon:{
fontSize:20,
	},
	dropInputContainer: {
		width: '90%',
		backgroundColor: color._WHITE,
		paddingLeft: 0, //10,
		height: wp(11),
		borderRadius: wp(0.7), //5,
		paddingLeft: wp(3.75), //10,	
		justifyContent: 'center'
		
	},
	mainContainer: {
		width: '100%',
		paddingLeft: 0, //10,
		// height: wp(11),
		borderRadius: wp(0.7), //5,	
		// borderWidth: 0.2,
		justifyContent: 'center'
	},
	listStyle:{
		width:'100%'
	},
	dropdownItems: {
        width: '100%',
        height: 39,
		flexDirection:'row',
        backgroundColor: color._WHITE,
        alignItems: 'center',
        justifyContent: 'space-between',
		paddingHorizontal:wp(4),
		alignSelf:'center',
		paddingRight:wp(4.5),
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
		zIndex: 1,
		marginBottom: 1 ,
    },
	checkIcon:{
		fontSize:wp(5),
	},
	



});
export default styles;