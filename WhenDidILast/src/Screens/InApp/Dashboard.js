import React from 'react';
import { View, StyleSheet } from 'react-native';
 import { Title,  Text , Button } from 'react-native-paper'; 

export default function Dashboard({route }) {
  const { trial } = route.params;
   
  return (
    <View style={style.View}>
      <Title>Aee, você entrou</Title>
      <Text>{JSON.stringify(trial)}</Text>
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