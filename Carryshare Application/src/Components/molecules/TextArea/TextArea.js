import React from 'react';
import { TextInput, View ,Text} from 'react-native';
import * as resources from 'resources';
import styles from './TextAreaStyle';


const TextArea = ({ label,labelStyle, value,inputContainerStyle, mainContainerStyle,textFieldStyle,multiline, placeholder,onChangeText,keyboardType, editable,onFocus,onRef,secureTextEntry,error,onBlur,disable,length, ...props }) => (
	<View>
					<View style={[ styles.indexContainer,mainContainerStyle]}>
						<View style={styles.labelCol}>
							<Text numberOfLines={1} style={[styles.label,labelStyle]}>{label}</Text>
						</View>
						<View style={[styles.InputCol,inputContainerStyle]}>
							<TextInput
								maxLength={length} 
								keyboardType={keyboardType?keyboardType:'default'} 
								secureTextEntry={secureTextEntry ?secureTextEntry : false}
								style={[ styles.indexInput, textFieldStyle,error?{color:'red'}:{}]}
								underlineColorAndroid={'transparent'}
								onChangeText={(text) => { onChangeText(text); 	}}
								value={value}
								editable={editable}
								placeholder={placeholder}
								placeholderTextColor={error ? 'red':'#B2B2B2'}
								ref={onRef != undefined?onRef:null}
								onFocus={()=>{ if(onFocus !== undefined) { onFocus();} }}
								onBlur={()=>{ if(onBlur !== undefined) { onBlur(); } }} 
								multiline={true}
									{...props} />
							
						</View>
					</View>
					
				</View>
);

export default TextArea;