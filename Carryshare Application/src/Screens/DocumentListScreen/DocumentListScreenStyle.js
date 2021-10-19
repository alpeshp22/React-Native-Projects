import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - wp(10));
const ITEM_HEIGHT = Math.round(ITEM_WIDTH / wp(1));

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
		backgroundColor:theme.SCREEN_BACKGROUND_COLOR,
	},
	// box: {
	// 	backgroundColor: '#DDD',
	// 	minHeight: 150,
	// 	borderRadius: 25,
	// 	justifyContent: 'center'
	// },
	cardView: {
		minHeight: 140,
		backgroundColor:theme.PRIMARY_CARD_BG,
		margin: 15,
		borderRadius: 15,
	},
	vrifiedCard: {
		minHeight: 140,
		backgroundColor:theme.PRIMARY_CARD_BG,
		margin: 15,
		borderRadius: 15,
		borderColor:color._emeraldgreen,
		borderWidth:2
	},
	dayChecked:{
		fontSize: 30,
		color: color._emeraldgreen,
		position: 'absolute',
		right: -0,
		top:-0,
		padding:5,
        // height: 40,
        // width: 40,
		
	},
	headeRow: {
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row',
		paddingVertical:5,
		borderBottomColor:theme.PRIMARY_BORDER_COLOR,
		borderBottomWidth:1

	},
	topRow: {
		flexDirection:'row',
		paddingHorizontal:10,
		paddingVertical:5,
	},
	row: {
		flexDirection:'row',
		paddingHorizontal:10,
		paddingBottom:5,
	},
	title: {
		fontSize:wp(4),
		fontWeight:'700',
		letterSpacing:wp(0.25),

	},
	text: {
		fontSize:wp(4),
		fontWeight:'600',
		letterSpacing:wp(0.25),
	},
	// container: {
	// 	flex:1,
	// },
	
	flatListContainer: {
		paddingHorizontal:5,
		width:(width/3)-7,
		height:100,
		marginHorizontal:2,
		marginVertical:2,
		borderRadius:10,
		alignItems:'center',
		maxWidth:(width/3)-7,
	},
	img: {
		position:'relative',
			height:"100%",
			width:"100%",
			borderRadius:10,
	  },
	  flatList:{
		paddingVertical:10,
		paddingHorizontal:5,
	},
	fff: {

	},
	fff: {

	},

});
export default styles;