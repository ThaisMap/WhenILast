import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { Button, Title } from 'react-native-paper';

GoogleSignin.configure({
  webClientId: '975121724951-0dp1v2a39u7hnvkv24khbbl5jn9meqtf.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export default function LoginOptions({ navigation }) {
  return (
    <View style={style.View}> 
      <Title>Here you have these great options</Title>
      <Button
        style={style.Button}
        icon="email"
        mode="contained"
        onPress={() => navigation.navigate('EmailLogin')} >
        Login com seu e-mail
      </Button>
      <Button
        icon="google"
        mode="contained"
        style={style.Button}
        onPress={onGoogleButtonPress}>Login com o Google
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
