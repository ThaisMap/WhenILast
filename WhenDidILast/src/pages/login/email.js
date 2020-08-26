import React, { useState } from 'react';
import { TextInput, Button, Title } from "react-native-paper";
import { View, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function doLogin() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Successful login'))
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          auth().signInWithEmailAndPassword(email, password);
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.log(error.code);
      });
    console.log(email);
    console.log(password);
  }

  return (
    <View style={style.View}>
      <Title style={style.Titulo}>Informe seu e-mail e senha</Title>
      <View>
      <TextInput
        keyboardType="email-address"
        
        style={style.inputs}
        onChangeText={(email) => setEmail(email)}
        label='E-mail'
        placeholder='E-mail'
      />
      <TextInput
        style={style.inputs}
        onChangeText={(pass) => setPassword(pass)}
        label="Senha"
        placeholder="Senha"
        secureTextEntry
      />
      <Button style={style.Button}  onPress={doLogin}>Entrar</Button>
    </View>
    </View>
  );
}

const style = StyleSheet.create({
  inputs: { 
    height: 50,
    margin: 20,
  }, 
  Titulo:{
    alignSelf: 'center'
  },
  View: {
    flex: 1,
    justifyContent: 'center', 
    padding: 10,
},

  Button: { 
    justifyContent: 'center',
  }
});
