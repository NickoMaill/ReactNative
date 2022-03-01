import { View, Text, Image } from "react-native";

export default function CountryCard(props) {
    return (
        <View>
            <Text>
                Name : {props.name}
            </Text>
            <Text>Capital : {props.capital}</Text>
            <Image source={{ uri: props.flag }} style={{ width: 200, height: 100 }}></Image>
        </View>
    );
}