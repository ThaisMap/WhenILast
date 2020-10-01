import React from 'react';
import { View, StyleSheet } from 'react-native';
 import { Title,  Text , Button, Appbar } from 'react-native-paper';  

export default function Dashboard({route, navigation }) {
  const { trial } = route.params;
   
  return (
    <View style={style.View}>
      <Appbar.Header>
                    <Appbar.Action icon='menu' onPress={() => {navigation.openDrawer()}} />
                    <Appbar.Content title='Dashboard' />
                </Appbar.Header>
      <Title>Aee, você entrou</Title>
      <Text>{JSON.stringify(trial)}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  View: {
    flex: 1,
    alignItems: 'stretch',
  },

  Button: {
    marginTop: 40,
    width: 253,
    height: 42,
  }
});