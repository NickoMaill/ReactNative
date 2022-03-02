import { SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./Views/Home";
import Login from "./Views/Login";

export default function App() {
	return (
		<SafeAreaView>
			<NativeRouter>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route exact path="/login" element={<Login/>} />
				</Routes>
			</NativeRouter>
		</SafeAreaView>
	);
}