import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginOptions() {
  return (
    <View>
      <Text>Here you have these great options</Text>
      <Button title="Login with e-mail" onPress={() => {}} />
      <Button title="Login with Google" onPress={() => {}} />
    </View>
  );
}
