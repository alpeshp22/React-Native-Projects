import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SecurityScreenStyle";
import * as Atoms from '../../Components/atoms';
import { getTranslatedValue } from '../../Constants/translation';
import { getCmsPageAction } from '../../store/content';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';

const SecurityScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);
	// const [data, setData] = React.useState([{title:"Terms & Condition",pageType:'terms_and_condition'},
	// {title:"FAQ",pageType:'Terms & Condition'},
	// {title:"Privacy Policy",pageType:'Terms & Condition'},
	// {title:"Price and ServiceList",pageType:'Terms & Condition'},])
	const [data, setData] = React.useState([]);
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/security_page',
			placeholder,
		);
	}
	React.useEffect(() => {
		let focusListener = navigation.addListener('focus', () => {
			let page_all_types = [];
		for (var key of Object.keys(stateGlobal.configData.page_type)) {
			let obj = {};
			obj.title = stateGlobal.configData.page_type[key];
			obj.pageType = key;
			page_all_types.push(obj);
		}
		setData(page_all_types)
		console.log('page_all_types',page_all_types)
		});
		return focusListener;
	});
	const _renderFlatList = ({item,index}) => {
		return (
			<View>
				<Molecules.OptionRow
					leftIcon2={'file-document'}
					title={item.title}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { let request={};
					request.language_code='en';
					request.page_type=item.pageType;
					dispatch(getCmsPageAction(request,navigation))}}
				/>

			
			</View>
		);
	}
	return (
		<View style={[styles.container,]}>
			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('security_heading_text')} />
			<View style={[styles.ListContainer]}>
				<View >
				<Text style={styles.lableText}>{translation('password_sub_heading_text')}</Text>
				<Molecules.OptionRow
					leftIcon={'lock'}
					rightIcon={'edit-3'}
					title={' * * * * * *'}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle2}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate("ChangePassword")}}
				/>
				</View>
 				<View>
 				<Text style={styles.lableText}>{translation('legal_information_sub_heading_text')}</Text>

				 </View>
				<FlatList
                data={data}
                renderItem={_renderFlatList}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.serviceFlatList}
                
              />		
			</View>

		</View>
	);

}


export default SecurityScreen;

