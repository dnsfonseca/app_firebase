import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SubjectList({ data }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFFF",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Nome do jogo:{" "}
        <Text style={{ color: "#ffff", fontSize: 17, fontWeight: "normal" }}>
          {data.setGameName}
        </Text>
      </Text>
      <Text
        style={{
          color: "#FFFF",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Gênero:{" "}
        <Text style={{ color: "#ffff", fontSize: 17, fontWeight: "normal" }}>
          {data.setGender}
        </Text>
      </Text>
      <Text
        style={{
          color: "#FFFF",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Desenvolvedora:{" "}
        <Text style={{ color: "#ffff", fontSize: 17, fontWeight: "normal" }}>
          {data.setDeveloperCompany}
        </Text>
      </Text>
      <Text
        style={{
          color: "#FFFF",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Distribuidora:{" "}
        <Text style={{ color: "#ffff", fontSize: 17, fontWeight: "normal" }}>
          {data.setDistributor}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#5e365a",
    borderRadius: 4,
  },
});
