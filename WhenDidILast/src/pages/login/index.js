import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('E-mail');
  const [password, setPassword] = useState();

  function doLogin() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Successful login'))
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
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
    <View>
      <Text>The wonderful login page</Text>
      <TextInput
        keyboardType="email-address"
        style={style.inputs}
        onChangeText={(email) => setEmail(email)}
        placeholder={email}
      />
      <TextInput
        style={style.inputs}
        onChangeText={(pass) => setPassword(pass)}
        placeholder="Password"
        secureTextEntry
      />
      <Button style={style.botao} title="Login" onPress={doLogin} />
    </View>
  );
}

const style = StyleSheet.create({
  inputs: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  },
  botao: {
    height: 50,
    width: 30,
  },
});
