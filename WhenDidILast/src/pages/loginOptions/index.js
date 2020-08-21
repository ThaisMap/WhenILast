import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function LoginOptions({navigation}) {
  return (
    <View style={style.View}>
      <Text style={style.Text}>Here you have these great options</Text>
      <TouchableOpacity
        style={style.Button}
        onPress={() => navigation.navigate('EmailLogin')}
        >
      <Text  style={style.TextButton}>Login with e-mail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.Button}> 
        <Text  style={style.TextButton}>Login with google</Text>
        </TouchableOpacity>
      
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
