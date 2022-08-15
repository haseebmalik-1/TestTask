import React, {useEffect} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {colors} from './../utils/CommonUtils';

const CustomTextInput = props => {
  const {value, onTextChanged, fieldLabel, containerStyle} = props;


  useEffect(() => {
    console.log(props);
  }, [value]);

  return (
    <View style={[styles.container, containerStyle || {}]}>
      <TextInput
        keyboardType={'numeric'}
        value={value}
        onChangeText={onTextChanged}
        style={styles.input}
      />
      <Text style={styles.label}>{fieldLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0.5,
    borderColor: colors.main,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: colors.main,
  },
  label: {
    color: colors.main,
    marginLeft: 10,
  },
});
export default CustomTextInput;
