import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebaseConnection';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigation = useNavigation();

  async function login() {
    await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then((value) => {
        alert('Bem-vindo(a)!');
        navigation.navigate('Subjects');
        return;
      })
      .catch((error) => {
        alert('Algo deu errado!');
        return;
      })
    setUserEmail('');
    setUserPassword('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(text) => setUserEmail(text)}
        value={userEmail}
        placeholder="Digite seu e-mail..."
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        onChangeText={(text) => setUserPassword(text)}
        value={userPassword}
        placeholder="Digite sua senha..."
      />

      <View style={styles.viewButton}>
        <TouchableHighlight
          onPress={login}
          style={styles.button}
        >
          <Text style={{ color: '#FFFF', fontWeight: 'bold', fontSize: 18 }}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#121212',
    height: 45,
    fontSize: 17,
    borderRadius: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a858a0',
    width: 200,
    height: 50,
    borderRadius: 6,
    marginTop: 10
  },
  viewButton: {
    alignItems: 'center'
  }
});
