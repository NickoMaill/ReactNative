import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    console.log(email.length);
  }, [email])

  const submitForm = () => {
    if (email.length >= 6 && password.length >= 6) {
      setIsLogged(true)
    }
  }

  const deconnectUser = () => {
    setIsLogged(false)
  }

  if (isLogged !== false) {

    return (
      <View style={styles.container}>

        <Text style={styles.text}>ACCUEIL</Text>

        <Text>Vous êtes actuellement connecté</Text>

        <TouchableOpacity style={styles.submit} onPress={deconnectUser}>
          <Text>Se Déconnecter</Text>
        </TouchableOpacity>

      </View>

    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>ACCUEIL</Text>

      <Text>Entrez vos identifiants pour acceder au contenu</Text>

      <TextInput
        style={styles.input}
        placeholder="Email / Pseudo"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChange={(e) => setPassword(e.target.value)}
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