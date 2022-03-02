import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet } from "react-native";

export default function Home() {
  const [toggle, setToogle] = useState(false);

  const submitForm = () => {

  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        Home
      </Text>

      <TouchableOpacity onPress={() => navigate("/about")}>
        <Text>Entrez vos identifiants pour acceder au contenu</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
      />
      <TouchableOpacity style={styles.submit} onPress={submitForm}>
        <Text>Se Connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
    marginTop: 10,
  },

  submit: {
    borderWidth : 1,
    borderRadius:10,
    padding: 5,
    margin: 20,
  }
})