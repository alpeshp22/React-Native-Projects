import React from 'react';
import {TextInput, Image} from 'react-native';
import * as resources from 'resources';
import styles from './TextInputStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TextField = ({
  value,
  textFieldStyle,
  multiline,
  onSubmitEditing,
  placeholder,
  onChangeText,
  keyboardType,
  editable,
  onFocus,
  onRef,
  secureTextEntry,
  error,
  onBlur,
  disable,
  length,
  ...props
}) => (
  <TextInput
    maxLength={length}
    keyboardType={keyboardType ? keyboardType : 'default'}
    secureTextEntry={secureTextEntry ? secureTextEntry : false}
    style={[
      styles.textFieldDefault,
      textFieldStyle,
      error ? {color: 'red'} : {},
    ]}
    underlineColorAndroid={'transparent'}
    onChangeText={(text) => {
      onChangeText(text);
    }}
    value={value}
    editable={editable}
    placeholder={placeholder}
    onSubmitEditing={() => onSubmitEditing}
    placeholderTextColor={error ? 'red' : '#B2B2B2'}
    ref={onRef != undefined ? onRef : null}
    onFocus={() => {
      if (onFocus !== undefined) {
        onFocus();
      }
    }}
    onBlur={() => {
      if (onBlur !== undefined) {
        onBlur();
      }
    }}
    multiline={multiline}
    {...props}
  />
);

export default TextField;
