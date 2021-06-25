import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";
import SubjectList from "../../components/SubjectList";

export default function Subjects() {
  const [gameName, setGameName] = useState("");
  const [gender, setGender] = useState("");
  const [developerCompany, setDeveloperCompany] = useState("");
  const [distributor, setDistributor] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function getSubjectData() {
      await firebase
        .database()
        .ref("subjects")
        .on("value", (snapshot) => {
          setSubjects([]);

          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              gameName: childItem.val().gameName,
              gender: childItem.val().gender,
              developerCompany: childItem.val().developerCompany,
              distributor: childItem.val().distributor,
            };
            setSubjects((oldArray) => [...oldArray, data].reverse());
          });
          setLoading(false);
        });
    }
    getSubjectData();
  }, []);

  async function registerSubject() {
    if (
      (gameName != "") &
      (gender != "") &
      (developerCompany != "") &
      (distributor != "")
    ) {
      let subjects = await firebase.database().ref("subjects");
      let key = subjects.push().key;

      subjects.child(key).set({
        gameName: gameName,
        gender: gender,
        developerCompany: developerCompany,
        distributor: distributor,
      });

      alert("O novo jogo foi cadastrado!");

      setGameName("");
      setGender("");
      setDeveloperCompany("");
      setDistributor("");
    } else {
      alert(
        "Preencha todas as informações para efetuar o cadastro do novo jogo!",
      );
    }
  }

  async function logout() {
    await firebase.auth().signOut();
    navigation.navigate("Homepage");
    alert("Logout efetuado com sucesso!");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Nome do jogo</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setGameName(text)}
          value={gameName}
          placeholder="Informe o nome do jogo"
        />

        <Text style={styles.text}>Gênero do jogo</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setGender(text)}
          value={gender}
          placeholder="Informe o gênero do jogo"
        />

        <Text style={styles.text}>Empresa desenvolvedora</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setDeveloperCompany(text)}
          value={developerCompany}
          placeholder="Informe o nome da empresa desenvolvedora do jogo"
        />

        <Text style={styles.text}>Distribuidora</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setDistributor(text)}
          value={distributor}
          placeholder="Indorme a empresa distribuidora"
        />

        <View style={styles.viewButton}>
          <TouchableHighlight onPress={registerSubject} style={styles.button}>
            <Text style={{ color: "#FFFF", fontWeight: "bold", fontSize: 18 }}>
              Efetuar cadastro
            </Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={logout} style={styles.button}>
            <Text style={{ color: "#FFFF", fontWeight: "bold", fontSize: 18 }}>
              Sair
            </Text>
          </TouchableHighlight>
        </View>

        {loading ? (
          <ActivityIndicator color="#121212" size={45} />
        ) : (
          <FlatList
            keyExtractor={(item) => item.key}
            data={subjects}
            renderItem={({ item }) => <SubjectList data={item} />}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a858a0",
    width: 200,
    height: 50,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  viewButton: {
    alignItems: "center",
  },
});
