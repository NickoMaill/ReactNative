import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';


export default function App() {

  const [showLoading, setShowLoading] = useState(false)

  const MyAlert = () => {

    Alert.alert(
      'this is my alert',
      setShowLoading(true),
      [
        {
          text: "Ok",
          onPress: () => setShowLoading(false)
        },
        {
          text: "Cancel", onPress:() => setShowLoading(false)
        }
      ]

    )
  }

  return (


    <ScrollView >

      <View style={styles.mainView} >

        <View style={styles.container}>
          <Text style={styles.titleH1}>Hello World</Text>
          <Text style={styles.titleH2}>We are In React Native!</Text>
          <Text style={styles.textP}>I can see this on my phone!</Text>
        </View>

        <View>
          <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
            style={{ width: 300, height: 100 }} />
          <Image source={require("./assets/adaptive-icon.png")}
            style={{ width: 100, height: 100 }} />
        </View>

        <TouchableOpacity onPress={MyAlert} style={styles.button}><Text>Press Me!</Text></TouchableOpacity>
        {showLoading && <ActivityIndicator style={styles.indicator} size="large" />}
      </View>


    </ScrollView>

  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: "center"

  },

  container: {
    backgroundColor: 'white'
  },

  titleH1: {
    marginVertical: 80,
    fontSize: 30,
  },

  titleH2: {
    marginVertical: 80,
    textAlign: 'center',
  },

  textP: {
    marginVertical: 80,
    fontWeight: "bold"
  },

  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30
  },

  indicator: {
    color: "#fff",
    marginBottom: 20
  }



});
