import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

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
      <Text style={style.Text}>Here you have these great options</Text>
      <TouchableOpacity
        style={style.Button}
        onPress={() => navigation.navigate('EmailLogin')}
      >
        <Text style={style.TextButton}>Login with e-mail</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress} />

    </View>
  );
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    fontWeight: 'bold'
  },
  TextButton:
  {
    alignSelf: 'center',
    color: '#fff',
    paddingVertical: 10
  },
  Button: {
    marginTop: 50,
    backgroundColor: '#4285F4',
    width: 253,
    height: 42,
  }
});
