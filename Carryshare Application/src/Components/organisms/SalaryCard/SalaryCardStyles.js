import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";
import { theme } from '../../../Constants/Theme';

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,	
	},
	listRow:{		
		flexDirection: 'row',
		paddingHorizontal:15,
	},	
	assignListContainer:{
		minHeight: 80,
		width: ITEM_WIDTH,
		borderRadius:5,
		paddingVertical:10,
		paddingHorizontal: 15,
		width:'100%',
		marginBottom:15,
		backgroundColor:color._WHITE,
		marginTop:5,
		shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,

		flexDirection:'row',
		justifyContent:'flex-start',
		width:'100%'

	},
	col1:{
		width:'20%',
	},
	col2: {
		width:'80%',
	},
	
	imageContainer:{
		alignItems: 'flex-start',
		justifyContent: 'center',
		zIndex: 10,
		
	},
	userImg:{
		backgroundColor: "#c7dbea",
		width: 50,
		height: 50,
		borderRadius: 100
	},
	titleTxt:{
		fontSize:wp(3.6),
		color: color._BLACK,
	},
	iconView: {
		justifyContent:'center',
	},
	iconStyle: {
		fontSize:wp(7),
		color:color._00a68f,
		marginRight:-5,
		marginLeft:5,
	},
	rowContainer: {
		flexDirection:'row',
		justifyContent:'space-between',
		marginBottom:5,
	},
	rowContainerInner: {
		flexDirection:'row'
	},
	rowContainerTitle: {
		color:color._lable_Light_Color_2,
		fontSize:wp(3.5),
		marginRight:5,
		fontWeight:'700',
	},
	

});
export default styles;

