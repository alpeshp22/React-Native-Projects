import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";
import { theme } from '../../../Constants/Theme';

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		// marginBottom: 10,
		// marginHorizontal: 10,
		// backgroundColor:'#ccc',
		
	},
	listRow:{		
		flexDirection: 'row',
		// ,
	},	
	imageContainer:{
		alignItems: 'flex-start',
		justifyContent: 'center',
		marginRight: -20,
		zIndex: 10,
	},
	userImg:{
		backgroundColor: "#c7dbea",
		width: 70,
		height: 70,
		borderRadius: 10
	},
	assignListContainer:{
		height:wp(20.5),
		// width: ITEM_WIDTH,
		width:'100%',
		// borderRadius: 7,
		// borderTopLeftRadius: 50,
		// borderBottomLeftRadius: 50,
		position: 'relative',
		// paddingLeft: 15,
		justifyContent:'flex-start',
		// paddingVertical:10,
		// backgroundColor:'#eaeaea'
		marginBottom:10,
		backgroundColor:color._WHITE,
		borderBottomColor:color._BORDER_COLOR,
		borderBottomWidth:1,
		flexDirection:'row',
		justifyContent:'space-between',
	},
	topView:{
		flexDirection:'row',
		alignContent:'space-between'
	},
	titleTxt:{
		fontSize:wp(3.8),
		fontWeight: '700',
		color: color._BLACK,
	},
	description:{
		fontSize:wp(3.5),
		fontWeight: '600',
		color:'#000',
	},
	dateLable:{
		color: "#DDDDDD"
	},
	activeDot:{
		width: 10,
		height: 10,
		borderRadius: 100,
		backgroundColor: '#228b22',
		position: 'absolute',
		right: 10,
		top: 6,
	},
	issueListContainer:{
		paddingHorizontal:15,
		paddingVertical:5,
		flex:2,

	},
	
	iconView: {
		justifyContent:'center',
	},
	iconStyle: {
		fontSize:wp(9),
		color:theme.PRIMARY_BORDER_COLOR,
		marginRight:-5,
		marginLeft:5,

	},
	

});
export default styles;

