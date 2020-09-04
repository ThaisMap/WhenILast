import React from 'react';
import { View, StyleSheet } from 'react-native';
import { signInWithGoogle } from '../../api/firebase';
import { Button, Title } from 'react-native-paper';

async function onGoogleButtonPress() {
   return signInWithGoogle();
}

export default function LoginOptions({ navigation }) {
  return (
    <View style={style.View}> 
      <Title>As opções são poucas e boas</Title>
      <Button
        icon="google"
        mode="contained"
        style={style.Button}
        onPress={onGoogleButtonPress}>Login com o Google
      </Button>

      <Button
        style={style.Button}
        icon="email"
        mode="contained"
        onPress={() => navigation.navigate('EmailLogin')} >
        Login com seu e-mail
      </Button>


    </View>
  );
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  
  Button: {
    marginTop: 40,
    width: 253,
    height: 42,
  }
});
