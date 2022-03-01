import { View, Text } from "react-native";

export default function CountryCard(props) {
	return (
		<View>
			<Text>
			Name : {props.name}
			</Text>
			<Text>Capital : {props.capital}</Text>
		</View>
	);
}