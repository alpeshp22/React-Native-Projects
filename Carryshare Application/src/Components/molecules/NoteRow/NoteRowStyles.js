import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	toDoListContentContainer: {
		paddingHorizontal:15,
		paddingVertical:10,
	},
	toDoListInnerTitle: {
		marginBottom:5,
	},
	toDoListInnerTitleText: {
		color:theme.CARD_TEXT_BG_3,
		fontSize:wp(4),
		fontWeight:'700',
	},
	toDoListContent: {
		flexDirection:'row',
		// marginBottom:10,
		borderBottomWidth:1,
		borderBottomColor:theme.PRIMARY_BORDER_COLOR,
	},
	toDoListBulletIconContainer: {
		flex:0.3,
	},
	toDoListBulletIcon: {
		color:theme.CARD_TEXT_BG_3,
		fontSize:20,
		marginTop:10
	},
	toDoListDescriptionContainer: {
		flex:2.2,
	},
	toDoListDescription: {
		lineHeight:20,
	},
	toDoListCheckContainer: {
		flex:0.4,
		justifyContent:'flex-start',
		alignItems:'flex-end',
	},
	toDoListCheckIcon: {
		fontSize:30,
		color:'black'
	},
	
	slectedText:{
		// height:35,
		fontSize:wp(3.8),
		textDecorationLine:'line-through',
		textAlignVertical:'top',
		paddingBottom:5, 

	},
	notSlectedText:{
		fontSize:wp(4),
		fontSize:wp(3.8),
		textAlignVertical:'top',
		paddingBottom:5, 

	}
	

	

});
export default styles;

