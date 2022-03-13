import { useState } from "react";
import { StyleSheet } from "react-native";
import Button from "../components/Button";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Geolocation from "@react-native-community/geolocation";

export default function TabOneScreen({ navigation }: RootTabScreenProps<"TabOne">) {
	const [boarded, setboarded] = useState(false);

	const changeBoarded = (): void => {
		Geolocation.getCurrentPosition((info) => console.log(info));

		setboarded(!boarded);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<View style={{ width: "100%", paddingLeft: "2em", paddingRight: "2em", flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
				<Button type="board" style={styles.button} text={boarded ? "Great job" : "Already Boarded?"} action={changeBoarded} />
				<Button type="switch" style={styles.button} text="Switch School" />
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
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
	button: {
		width: "100%",
	},
});
