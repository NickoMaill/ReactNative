import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Home() {

  const submitForm = () => {

  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >
        ACCUEIL
      </Text>

      <TouchableOpacity onPress={() => navigate("/about")}>
        <Text>Entrez vos identifiants pour acceder au contenu</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Email / Pseudo"
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    margin: 20,
  },

  text: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  }
})