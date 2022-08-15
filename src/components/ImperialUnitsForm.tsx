import React, { useEffect } from 'react';
import {StyleSheet, View} from "react-native";
import CustomTextInput from './CustomTextInput';
import {colors} from "../utils/CommonUtils";

const ImperialUnitsForm = (props) => {
	const {lbs, changeLbs, ft, changeFt, ins, changeIn} = props;


	return (
		<View style={styles.container}>
			<CustomTextInput value={lbs} onTextChanged={changeLbs} label={'lbs'} />
			<View style={styles.row}>
				<View style={styles.inputContainer}>
					<CustomTextInput value={ft} onTextChanged={changeFt} label={'ft'} />
				</View>
				<View style={styles.inputContainer}>
					<CustomTextInput value={ins} onTextChanged={changeIn} label={'in'} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center'
	},
	titles: {
		color: colors.main,
		marginBottom: 5
	},
	row: {
		marginVertical: 15,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	inputContainer: {
		width: '47%'
	},
})

export default ImperialUnitsForm;
