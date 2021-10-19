import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {color} from '../../../Constants/Color'
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	headerContainer: {
		// backgroundColor:color._WHITE,
		backgroundColor:color._Button_Color,

		width:'100%',
		paddingHorizontal:15,
		paddingVertical:10,
		flexDirection:'row',
		justifyContent:'space-between',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		//elevation: 5,
	},
	headerLeft: {
		flex:0.3,
		justifyContent:'center',
		alignItems:'flex-start',
	},
	headerLeft2: {
		flex:.7,
		justifyContent:'space-between',
		alignItems:'flex-start',
		flexDirection:'row',
	},
	headerRight2: {
		flexDirection:'row',
		flex:.3,
		alignItems:'center',
		justifyContent:'flex-end',
		},
	headerHome: {
		alignItems:'center',
	},
	header:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	HeaderHomeText: {
		justifyContent:'center',
		fontSize:wp(5.5),
		fontWeight:'700',
		paddingLeft:10,
		color:'#D4D4D4',
	},
	headerHomeIcon: {
		fontSize:wp(8.5),
		// color:'#000',
		color:'#D4D4D4',
		marginLeft:-3,
	}, 
	headerLogoContainer: {
		flex:2,
		justifyContent:'center',
		alignItems:'center',
	},
	headerLogo: {
		borderRadius:10,
		height:60,
		width:150,
		marginLeft:20,
	},
	HeaderLogoImg: {
		width:'100%',
		height:'100%',
	},
	headerRight: {
		flexDirection:'row',
		flex:0.7,
		alignItems:'center',
		justifyContent:'flex-end',
	},
	headerNotificationContainer: {
		justifyContent:'flex-end',
	},
	HeaderNotificationText: {
		color:'#FFF',
		fontSize:wp(3),
	},
	headerNotificationIcon: {
		fontSize:wp(7),
		// color:'#000',
		color:color._WHITE,
		textAlign:'center',
		marginRight:12,
	},
	headerUserImgContainer: {
		width:40,
		height:40,
		borderColor:'#FFF',
		borderWidth:1,
		borderRadius:100,
	}, 
	headerUserImg: {
		width:'100%',
		height:'100%',
		borderRadius:100,
	},
});
export default styles;