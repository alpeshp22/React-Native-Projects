import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import * as resources from 'resources';
import * as Atoms from '../../atoms';
import styles from './DoubleViewSwitchStyle';
import Icon from 'react-native-vector-icons/Feather';

const DoubleViewSwitch = ({ title, subtitle,isDisable, iconName,isON, description,descriptionStyle, onClick,onDescriptionLinkPress ,descriptionLink}) => (
	<View style={{ flexDirection: 'column' }}>
		<View style={styles.cellView}>
			<Icon name={!iconName?"lock":iconName} style={styles.cellLock} />
			<View style={styles.containerDouble}>
				<Text style={styles.textBlck}>{title ? title : ''}</Text>
				{subtitle && <Text style={styles.textGray}>{subtitle ? subtitle : ''}</Text>}
			</View>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					paddingRight: 10
				}}
			>
				<Atoms.Switch value={isON} onPress={() => onClick(!isON)} />
			</View>

			<View style={styles.sepView} />
		</View>
		{description&& (
			<View style={[styles.descriptionRow, descriptionStyle]}>
				<Text style={[styles.appDescription]}>{description}{' '}
					<Text  onPress={() => {onDescriptionLinkPress()}}  style={styles.DescriptionLink}>{descriptionLink}</Text></Text>
			</View>
		)}
	</View>
);

export default DoubleViewSwitch;
