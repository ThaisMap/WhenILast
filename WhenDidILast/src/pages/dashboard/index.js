import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Dashboard() {
  function logout() {
    auth().signOut();
  }

  return (
    <View>
      <Text>Yay, youre in</Text>
      <Button title="Go Back Out" onPress={logout} />
    </View>
  );
}
