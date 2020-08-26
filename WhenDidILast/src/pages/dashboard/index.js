import React from 'react';
import { View, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { Title, Button } from 'react-native-paper';

export default function Dashboard() {
  function logout() {
    auth().signOut();
  }

  return (
    <View style={style.View}>
      <Title>Yay, youre in</Title>
      <Button
        style={style.Button}
        mode="contained"
        onPress={logout}>Go Back Out</Button>
    </View>
  );
}

const style = StyleSheet.create({
  View: {
    alignItems: 'center',
  },

  Button: {
    marginTop: 40,
    width: 253,
    height: 42,
  }
});