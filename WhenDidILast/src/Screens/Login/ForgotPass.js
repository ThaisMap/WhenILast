import React, { useState } from 'react';
import { TextInput, Button, Title, FAB } from "react-native-paper";
import { View, StyleSheet, Alert } from 'react-native';
import { sendResetEmail } from '../../api/firebase';

export default function Login({navigation}) {
  const [email, setEmail] = useState();

  function sendEmail() {
    sendResetEmail(email);
    navigation.navigate('EmailLogin');
  }

  return (
    <View style={style.sentence}>
      <Title style={style.Titulo}>Resetar a senha?</Title>
      <View >
        <TextInput
          keyboardType="email-address"

          style={style.inputs}
          onChangeText={(email) => setEmail(email)}
          label='E-mail'
          placeholder='E-mail'
        />
        <Button style={style.Button} onPress={sendEmail}>Enviar link</Button>         

      </View> 
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
});
