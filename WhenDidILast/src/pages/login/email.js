import React, { useState } from 'react';
import { TextInput, Button, Title, FAB } from "react-native-paper";
import { View, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function doLogin() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Senha incorreta!');
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('E-mail não cadastrado! ');
        }
        console.log(error.code);
      });
    console.log(email);
    console.log(password);
  }

  return (
    <View style={style.sentence}>
      <Title style={style.Titulo}>Informe seu e-mail e senha</Title>
      <View >
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
        <Button style={style.Button} onPress={doLogin}>Entrar</Button>

      </View>
        <FAB style={style.fab} icon="plus" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

const style = StyleSheet.create({
  inputs: {
    height: 50,
    margin: 20,
  },
  Titulo: {
    alignSelf: 'center'
  }, 
  sentence: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
},
  Button: {
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
