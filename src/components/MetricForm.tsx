import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {CustomTextInput} from '../components';

const MetricFoam = (props) => {
	const {kg, changeKg, mm, changeM} = props;
	return (
		<View  style={styles.container}>
			<CustomTextInput
				value={kg}
				onTextChanged={changeKg}
				label={'kg'} />
			<CustomTextInput
				value={mm}
				onTextChanged={changeM}
				containerStyle={styles.containerStyle}
				label={'m'} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center'
	},
	containerStyle: {
		marginVertical: 15
	}
})

export default MetricFoam;
