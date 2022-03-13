import { Text } from "../components/Themed";
import { StyleSheet } from "react-native";

interface buttonProps {
	text: string;
	action?: any;
}

const Button = ({ text, action }: buttonProps) => {
	const handleClick = () => {
		if (action !== null) {
			action();
		}
	};

	return (
		<button onClick={handleClick}>
			<p>{text}</p>
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
