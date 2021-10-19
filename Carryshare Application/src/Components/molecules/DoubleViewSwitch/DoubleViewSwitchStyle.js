import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#EEEEEE',
  },
  userIdContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ddd',
  },
  cellView: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    // zIndex: -1,
  },
  cellLock: {
    // width: 30,
    // width: 22, 
		// height: 22,
		// resizeMode: 'contain',
    marginHorizontal: 15,
    fontSize: 24,
    color: '#000000',
  },
  containerDouble: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  rightIcon: {
    width: 20,
    // marginHorizontal: 10,
    height: 20,
    resizeMode: 'contain',
  },
  sepView: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#DDD',
    position: 'absolute',
    bottom: 0,
  },
  containerSingle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  mr30: {
    marginRight: 30
  },
  textBlck: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
  },
  textGray: {
    color: 'gray',
    fontSize: 14,
  },
  descriptionRow:{
	flexDirection:'row',
	flexWrap:'wrap',
	paddingVertical: 20, 
    paddingHorizontal: 20, 
 },
  appDescription:{
    width: 'auto', 
    // paddingVertical: 20, 
    // paddingHorizontal: 20, 
    color: '#000000',
    fontSize: 15,
	lineHeight: 28,
	
  },
  DescriptionLink:{
	width: 'auto', 
    color: '#000000',
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
	textDecorationColor: '#000',
	// paddingLeft:10,
  },
});
