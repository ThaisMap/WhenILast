import React, { useState } from 'react';
import { TextInput, Button, Title, FAB } from "react-native-paper";
import { View, StyleSheet } from 'react-native';
import { signInwithEmail } from '../../api/firebase/login';

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function doLogin() {
      signInwithEmail(email, password)
  }

  function forgotPass() {
    navigation.navigate('Password');
  }

  return (
    <View style={style.view}>
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


        <Button style={style.Button} onPress={forgotPass}>Esqueceu a senha?</Button>



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
  view: {
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
