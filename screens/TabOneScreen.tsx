import { useState } from "react";
import { StyleSheet } from "react-native";
import Button from "../components/Button";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	const [boarded, setboarded] = useState(false);

	const changeBoarded = (): void => {
		setboarded(!boarded);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<Button text={boarded ? "Great job" : "Already Boarded?"} action={changeBoarded} />
			<Button text="Switch School" />
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
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
