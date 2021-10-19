import React from 'react';
import { View, TouchableOpacity, Text ,Platform} from 'react-native';
import styles from './TabStyle';
import LinearGradient from 'react-native-linear-gradient';

export const Tab = (props) => {
	const { currentTab, titleList, tabPress, titleStyle } = props;  /// <Tab currentTab={currentTab} titleList={['tab1', 'tab2', ]} tabPress={(currentTab) => setCurrentTab(currentTab)} />
	return (
		<View style={styles.tabBar}>
			<LinearGradient colors={['#FFFFFF', '#FFFFFF',]} style={Platform.OS === 'ios'? {height: 52}:{height: 47}} 
				style={{flex:1,flexDirection:'row',}}
			>
			{titleList.map((title, i) => {
  				return (
					<TouchableOpacity style={[[styles.tab], currentTab == i? styles.activeTab: styles.inactiveTab]} onPress={() => tabPress(i)} >
						<Text style={[titleStyle ? titleStyle : styles.tabTitle, currentTab == i? styles.activeTabTx: styles.inactiveTabTx]}>{title}</Text>
						
					</TouchableOpacity>
				)
			})}
			<View style={styles.topSep} />
			</LinearGradient>
		</View>
	);

} 
export default Tab;
