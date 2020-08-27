import React, { useState } from 'react';
import { TextInput, Button, Title } from "react-native-paper";
import { View, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Signup({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();

    function doLogin() {
        if (password == passwordCheck) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => navigation.navigate('EmailLogin'))
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('E-mail já cadastrado.');
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('Endereço de e-mail inválido!');
                    }
                    console.log(error.code);
                });
            console.log(email);
            console.log(password);
        }
        else
            Alert.alert('As senhas não são iguais!');
    }

    return (
        <View style={style.View}>
            <Title style={style.Titulo}>Informe seu e-mail e senha</Title>
            <View>
                <TextInput
                    keyboardType="email-address"

                    style={style.inputs}
                    onChangeText={(email) => setEmail(email)}
                    label='E-mail'
                    placeholder='E-mail'
                />
                <TextInput
                    style={style.inputs}
                    onChangeText={(pass) => setPassword(pass)}
                    label="Senha"
                    placeholder="Senha"
                    secureTextEntry
                />
                <TextInput
                    style={style.inputs}
                    onChangeText={(pass) => setPasswordCheck(pass)}
                    label="Senha"
                    placeholder="Senha"
                    secureTextEntry
                />
                <Button style={style.Button} onPress={doLogin}>Cadastrar</Button>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    inputs: {
        height: 50,
        margin: 20,
    },
    Titulo: {
        alignSelf: 'center'
    },
    View: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },

    Button: {
        justifyContent: 'center',
    }
});
