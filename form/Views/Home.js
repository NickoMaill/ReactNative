import { View, Text, TouchableOpacity, } from "react-native";
import { useNavigate } from "react-router-native";

export default function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <View>
            <Text>HOME</Text>
            <TouchableOpacity onPress={handleClick}>
				<Text>Login</Text>
			</TouchableOpacity>

        </View>
    );
}