import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../../../Constants/Theme';
const styles = StyleSheet.create({
	////Type 1
	cardSectionInner: {
		width:wp(43.6),
		maxHeight:100,
		backgroundColor:theme.PRIMARY_BG,
		paddingHorizontal:10,
		borderRadius:5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 1,
	},
	cardSectionTitle1: {
		fontSize:(18),
	},
	cardSectionIcon1: {
		fontSize:wp(16),
		color:theme.Card_Text,
		textAlign:'right'
	},
	//// Second CARD
	cardSectionInner2: {
		width:wp(30),
		borderRadius:5,
	},
	cardSection2Icon1Container: {
		alignSelf:'center',
		backgroundColor:theme.PRIMARY_BG,
		borderRadius:100,
		padding:10,
		width:wp(25),
		height:wp(25),
	},
	cardSection2Icon1: {
		fontSize:wp(18),
		color:theme.Card_Icon,
	},
	cardSection2Title1Container: {
		alignSelf:'center',
	},
	cardSection2Title1: {
		fontSize:(18),
	},

		//// New CARD
		cardSectionInner3: {
			width:wp(29.3),
			borderRadius:5,
			backgroundColor:theme.Card_Color_BG,
			paddingVertical:10,
			marginRight:wp(2),
			
		},
		cardSection3Icon1Container: {
			alignSelf:'center',
			backgroundColor:theme.PRIMARY_BG,
			borderRadius:100,
			padding:10,
			width:wp(25),
			height:wp(25),
			justifyContent:'center',
		},
		cardSection3Icon1: {
			fontSize:wp(18),
			color:theme.Card_Icon_1,
			alignSelf:'center',
		},
		cardSection3Title1Container: {
			alignSelf:'center',
		},
		cardSection3Title1: {
			fontSize:(14),
			color: theme.Card_Section_Title,
			marginTop:wp(2),
			fontWeight:'700'
		}, 
		walkThroughImg: {
			width:wp(14),
			height:wp(14),
			alignSelf:'center',
		},
});
export default styles;