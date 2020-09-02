import React from 'react';
import { View, Text } from "react-native";

export default function SplashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Carregando, aguente firme</Text>
        </View>
    );
}