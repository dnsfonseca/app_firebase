import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigation = useNavigation();

  async function registerUser() {
    if (userName != "") {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then((value) => {
          firebase.database().ref("users").child(value.user.uid).set({
            name: userName,
            email: userEmail,
          });
          alert("Cadastro efetuado com sucesso!");

          setUserName("");
          setUserEmail("");
          setUserPassword("");
          navigation.navigate("Login");
          return;
        })
        .catch((error) => {
          if (error.code === "auth/weak-password") {
            alert("Sua senha deve conter no mínimo 6 caracteres!");
            return;
          }
          if (error.code === "auth/invalid-email") {
            alert("E-mail inserido é inválido!");
            return;
          } else {
            alert("Algo deu errado! Tente novamente.");
            return;
          }
        });
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setUserName(text)}
        value={userName}
        placeholder="insira seu nome completo"
      />

      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setUserEmail(text)}
        value={userEmail}
        placeholder="Insira o seu e-mail"
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        onChangeText={(text) => setUserPassword(text)}
        value={userPassword}
        placeholder="Insira sua senha"
      />

      <View style={styles.viewButton}>
        <TouchableHighlight onPress={registerUser} style={styles.button}>
          <Text style={{ color: "#FFFF", fontWeight: "bold", fontSize: 18 }}>
            Efetuar cadastro
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: "#121212",
    height: 45,
    fontSize: 17,
    borderRadius: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a858a0",
    width: 200,
    height: 50,
    borderRadius: 6,
    marginTop: 20,
  },
  viewButton: {
    alignItems: "center",
  },
});
