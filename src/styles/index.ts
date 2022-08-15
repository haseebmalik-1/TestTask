import {StyleSheet} from "react-native";
import { colors } from "../utils/CommonUtils";

export const styles = StyleSheet.create({
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
	button: {
		marginTop: 15
	}
});

export const hooksStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 15
  },
});
