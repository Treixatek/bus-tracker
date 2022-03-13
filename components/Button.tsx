import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
import { styles } from "../screens/TabOneScreen";

interface buttonProps {
	style: any;
	text: string;
	action?: any;
	type: string; //the boarded or switch school button
}

const colorPalette = ["#4B9EFF", "#22D6B5"];

const Button = ({ style, text, action, type }: buttonProps) => {
	let useColor = "#fff";
	switch (type) {
		case "board":
			useColor = colorPalette[0]; //use bloo
			break;
		case "switch":
			useColor = colorPalette[1]; //use bloo
			break;

		default:
			useColor = "#fff";
			break;
	}
	const handleClick = () => {
		if (action !== null) {
			action();
		}
	};

	return (
		<button style={{ marginBottom: "1.5em", backgroundColor: useColor, border: "none", borderRadius: ".875em" }} onClick={handleClick}>
			<p style={{ color: "#fff", fontWeight: 500 }}>{text}</p>
		</button>
	);
};

const bstyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});

export default Button;
