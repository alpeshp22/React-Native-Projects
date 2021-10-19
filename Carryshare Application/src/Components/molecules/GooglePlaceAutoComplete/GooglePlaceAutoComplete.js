import React from 'react';
import {Text, View,Dimensions } from 'react-native';
import styles from './GooglePlaceAutoCompleteStyle';
import { theme } from "../../../Constants/Theme";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export const Dropdown = (props) => {
	const WIDTH = Dimensions.get('window').width;



	const { mainContainer, title, _searchInputRef, onPress, titleStyle, placeholder, placeholderStyle } = props;

	return (
		<View style={[styles.mainContainer, mainContainer]}>

			<Text style={[styles.titleTxt, titleStyle]}>{title}</Text>
			<GooglePlacesAutocomplete
				minLength={2}
				placeholder={placeholder}
				//returnKeyType={'Search'}
				ref={_searchInputRef}
				keyboardShouldPersistTaps={'never'}
				listViewDisplayed={true}
				disableScroll={false}
				query={{
					key: 'AIzaSyAYE6Y7IgBJgX4C1qvrhC4eoeDBbA1ZOQc',
					language: 'en', // language of the results
					region: 'IN', //administrative_area_level_3
					location: '23.033863, 72.585022',
					types: [
						'sublocality_level_2',
						'sublocality_level_1',
						'route',
						'locality',
					],
				}}
				fetchDetails={true}
				onPress={onPress}

				onFail={error => console.log("google error", error)}
				styles={{
					textInputContainer: {
						backgroundColor: 'rgba(0,0,0,0)',
						borderTopWidth: 0,
						borderBottomWidth: 0,
						width: WIDTH - 30,
						marginBottom: 8,

					},
					textInput: {
						marginTop: 0,
						marginLeft: 0,
						marginRight: 0,
						minHeight: 48,
						color: '#5d5d5d',
						fontSize: 16,
						borderRadius: 5,
						borderWidth: 1,
						borderColor: theme.PRIMARY_BORDER_COLOR,
					},
					predefinedPlacesDescription: {
						color: '#1faadb',
					},
				}}
				placeholderTextColor="#008ec3"
			/>



		</View>)





}
export default Dropdown;

