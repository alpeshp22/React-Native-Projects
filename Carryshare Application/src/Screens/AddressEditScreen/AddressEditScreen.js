import React ,{ useState, useEffect } from "react";
import { View, Text, Image ,TouchableOpacity,Keyboard} from "react-native";
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import styles from "./AddressEditScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import {AlertHelper} from '../../Constants/AlertHelper';
import { ScrollView } from "react-native";
import { updateProfileAction } from '../../store/user/actions';
import { getTranslatedValue } from '../../Constants/translation';


const RegistrationScreen = ({ navigation }) => {
	const dispatch = useDispatch();
    const stateUser = useSelector((state) => state.user);
    const stateGlobal = useSelector((state) => state.global);
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
	const [city, setCity] = useState('')
    const [country, setCountry] = useState(null)
    const [countryList, setCountryList] = useState([])
    const [state, setState] = useState('')
    const [scrollEnabled, setScrollEnabled] = useState(true);

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/profile_page',
			placeholder,
		);
	}
    React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {

			console.log('stateUser.userData', stateUser.userData)
			if (stateUser.userData != null) {

				_setUpdateValue(stateUser.userData);
			}
			if (stateGlobal.configData != null && stateGlobal.configData != undefined) {
				let country = [];
				stateGlobal.configData.country_list.map((value) => {
					let obj = {};
					obj.label = value.title;
					obj.value = value.id;;
					country.push(obj);
				});
				setCountryList(country)
				console.log('stateGlobal', stateGlobal.configData.country_list)

			}
		});
		return unsubscribe;
	});


    React.useEffect(() => {
		if (stateUser.userData != null) {
			_setUpdateValue(stateUser.userData);
		}
	}, [stateUser]);

    const _setUpdateValue = (userData) => {
		setCity(userData.city != null ? userData.city : '');
        setState(userData.state != null ? userData.state : '');
		setPincode(userData.zip_code != null ? userData.zip_code : '');
		setAddress(userData.address_line1  != null ? userData.address_line1 : '');
		if (userData.country!= null ){
			let obj={}
			obj.value=userData.country.id;
			obj.label=userData.country.country_name;
		setCountry(obj);

		}
		else{
		setCountry(userData.country );

		}
	}


    const do_authantication = () => {
		let isValidForm = true;
		let messageText = '';
        if (address == '') {
			isValidForm = false
			messageText = translation("address_validation_message")
		}
        else if (pincode == '') {
			isValidForm = false
			messageText = translation("pin_code_error_sub_header_test")
		}
        else if (city == '') {
			isValidForm = false
			messageText = translation("city_validation_message")
		}
        else if (country == '') {
			isValidForm = false
			messageText = translation("country_validation_message")
		}
        else if (state == '') {
			isValidForm = false
			messageText = translation("state_error_sub_header_test")
		}
        if (isValidForm) {
			let request = {}
			request.country = country.value
            request.city = city
			request.zip_code = pincode
            request.address_line1 = address
            request.state = state
			dispatch(updateProfileAction(request, navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}
	}

	return (

	<View style={[styles.mainContainer, { flex: 1 }]}>
	  <Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('edit_address_heading_text')} />

	<ScrollView>
		<View style={styles.container}>
        <Molecules.InputField 
			title={translation('address_label_text')}
            placeholder={translation('address_placeholder')}
            value={address}
            textFieldStyle={styles.addressbar}
            multiline={true}
            onChangeText={(text) => setAddress(text)}
			 />
				
			<Molecules.InputField 
            title={translation('pin_code_label_text')}
            placeholder={translation('pin_code_placeholder')}
            keyboardType={'number-pad'}
            value={pincode}
            onChangeText={(text) => setPincode(text)}/>

<Molecules.InputField
						title={translation('state_label_text')}
						placeholder={translation('state_placeholder')}
						value={state}
						onChangeText={(text) => setState(text)}
					/>

			<Molecules.InputField 
				title={translation('city_label_text')}
                placeholder={translation('city_placeholder')}
                value={city}
                onChangeText={(text) => setCity(text)}/>

   
<View style={styles.dropdown}>
						<Text style={styles.lableText}>{translation('country_label_text')}</Text>
	<Molecules.Dropdown
							setShowList={() => { setScrollEnabled(!scrollEnabled) }}
							selectedValue={country}
							data={countryList}
							placeholder={translation('country_placeholder')}
							value={country}
							inputContainerStyle={styles.dropInputContainer}
							placeholderStyle={styles.placeholderStyle}
							iconStyle={styles.dropdownIcon}
							listStyle={styles.listStyle}
							onChangeText={item => { setCountry(item) , console.log('item=====',item)}} 
							/>
                            </View>
			
		</View>
	</ScrollView>	
	<TouchableOpacity
        	style={styles.button}
        	onPress={()=>{ do_authantication() }}>
       		<Text style={styles.textButton}>{translation('save_changes_button_text')} </Text>
      		</TouchableOpacity>		
		</View>

	);
}



export default RegistrationScreen;