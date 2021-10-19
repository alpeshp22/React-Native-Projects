import React from 'react';
import { TouchableOpacity, Text, View, Image , FlatList } from 'react-native';
import styles from './DropdownStyle';
import Icon from 'react-native-vector-icons/Feather';


	export const Dropdown = (props) => {
		const [showList, setShow] = React.useState(false);

   


		const {  mainContainer,  data, selectedValue, isShowList, onChangeText, inputContainerStyle, iconStyle, listStyle,setShowList,  placeholder,placeholderStyle } = props;
	
			return (
				<View style={[styles.mainContainer, mainContainer]}>
					<TouchableOpacity style={[styles.drodownContainer, inputContainerStyle]} onPress={() =>	{setShow(!showList),setShowList()}} {...props}>
						{(selectedValue !==null) ?
							<Text style={styles.selectedTxt}>{selectedValue.label}</Text>
							:
							<Text style={[styles.landPlaceHolder,placeholderStyle]}>{placeholder}</Text>
						}
						<Icon name="chevron-down" style={[styles.downArrowIcon, iconStyle]} />
					</TouchableOpacity>
					{(showList === true || isShowList=== true) && (
						<View style={[styles.dropdownList, listStyle]}>
							<FlatList
								data={data}
								style={[styles.w100]}
								extraData={data}
								renderItem={({ item }) => {
									return (
										<TouchableOpacity
											style={[styles.dropdownItems, ]}
											onPress={() => {
												setShow(!showList)
												setShowList();
												onChangeText(item);
											}}
										>
											{selectedValue!=null?
												<>
											<Text style={[(item.value === selectedValue.value) ? {color: '#161616' } : {color: '#8A8A8A' },styles.labelTxt]}>{item.label}</Text>

											{item.value === selectedValue.value && (
												<Icon name="check" style={styles.checkIcon} />
											)}
											</>
											:<Text style={[ {color: '#161616' } , styles.labelTxt]}>{item.label}</Text>
											}
										</TouchableOpacity>
									);
								}}
							/>

						</View>
					)}


				</View>)

	

		

}
export default Dropdown;

