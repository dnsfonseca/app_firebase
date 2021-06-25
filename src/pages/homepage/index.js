import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Homepage() {
  const navigation = useNavigation();

  function registerUser() {
    navigation.navigate("Register");
  }

  function login() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Seja bem-vindo a biblioteca de jogos
      </Text>

      <TouchableHighlight onPress={registerUser} style={styles.button}>
        <Text style={{ color: "#FFFF", fontWeight: "bold", fontSize: 18 }}>
          Cadastrar Usuário
        </Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={login} style={styles.button}>
        <Text style={{ color: "#FFFF", fontWeight: "bold", fontSize: 18 }}>
          Entrar
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a858a0",
    width: 200,
    height: 50,
    borderRadius: 6,
    marginBottom: 10,
  },
});
