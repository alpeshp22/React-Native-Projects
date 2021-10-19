import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../../Constants/Color';

export default styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    paddingHorizontal: 1,
  },
  tabTitle: {
    color: '#000',
    fontSize: wp(3.5),
    fontWeight: '700',
  },
  topSep: {
    width: '100%',
    height: 1,
    position: 'absolute',
    top: 0,
  },
  sep: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 3,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderBottomColor: color._0075bf,
    borderBottomWidth: 2,
  },
  inactiveTab: {
    borderBottomColor: color._ccc,
  },
  activeTabTx: {
    color: '#000',
   
  },
});
