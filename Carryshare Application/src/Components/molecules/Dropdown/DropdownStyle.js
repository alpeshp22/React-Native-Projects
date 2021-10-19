import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({

    drodownContainer: {
        width: '100%',
    },
    touchableView: {
        width: '100%',
        justifyContent: 'center',
        borderBottomColor: 'lightgray',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    selectedTxt: {
        fontWeight:'600',
        fontSize:15,
        fontWeight: '700',
        color: '#000000',
	
    },
    landPlaceHolder: {
        fontWeight:'500',
        fontSize:15,
        fontWeight: '700',
        color: '#CCC',

    },
    downArrowIcon: {
        fontSize: 23,
        color: '#000',
        position: 'absolute',
        right:18,
    },
    dropdownList: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        maxHeight: 120,
        borderColor: 'lightgray',
        borderWidth: 1,
        elevation: 5,
        zIndex: 1,
		minHeight:80,
		// position: 'absolute',
		// top: 50,
    },
    dropdownItems: {
        width: '100%',
        height: 39,
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
		zIndex: 1,
		marginBottom: 1 ,
    },
    w100: {
         width: '100%',
    },
    checkIcon: {
        fontSize: 20,
        color: '#000',
        position: 'absolute',
        right: 8
	},
	
	// Is Land Dropdown CSS
	mainContainer:{
		position: 'relative',
	},
	labelTxt:{
		marginLeft: 10,
	},
	

});
