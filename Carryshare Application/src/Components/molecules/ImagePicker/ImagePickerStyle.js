import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";
export default (styles = StyleSheet.create({
	
	addressModalContainer:{
		width: '80%',
		height:wp(35),//140
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf:'center',
		elevation:5,
	},
	addressModalbody:{
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		elevation:5,
	  },
	  addressModalCard:{
		width: '100%',
		backgroundColor: color._WHITE,
		borderRadius: 10,
		overflow: 'hidden',
	  },
	  addressModalCardHeader:{
		justifyContent: 'center',
		paddingHorizontal: 15,
		paddingVertical: 10,
	  },
	  addressModalCardHeaderTxt:{
		fontSize: 18,
		fontWeight: '700',
		letterSpacing: 0.4,
	  },
	  btn1: {
		width: '100%',
	
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: wp(3.5),
		paddingHorizontal: wp(7.5),
	},
	middleBtn: {
		borderTopWidth: wp(0.3), //1.2
		borderBottomWidth: wp(0.3), // 1.2
		borderColor: theme.PRIMARY_BORDER_COLOR,
	},
	camaraIcon: {
		fontSize: wp(5.25), //21
		color:color._BLACK,
		
	},
	btn1Txt: {
		fontSize: wp(4),
		color:color._BLACK,
		paddingLeft: wp(5),
		letterSpacing: wp(0.125),
	},
	imageIcon: {
		fontSize: wp(5.5),
		color:color._BLACK,

	},
	textAreaContainer: {
		borderRadius:5,
	},
}));
