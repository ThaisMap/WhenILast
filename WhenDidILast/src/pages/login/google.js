import React from 'react';
import { View, Text } from "react-native";
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '975121724951-8d9ersadm63qgrj8rl94qdtnr3j731nv.apps.googleusercontent.com',
});
export default function GoogleSignin(){
    return(
    <View>
        <Text>The wonderful GoogleSignin page</Text>
    </View>
    );
}