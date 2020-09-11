import React, { useState } from 'react';
import { TextInput, Button, Title } from "react-native-paper";
import { View, StyleSheet } from 'react-native';
import { signUp } from '../../api/firebase/login';


export default function Signup({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();

    function doLogin() {
        if (password == passwordCheck) {
            if(signUp(email, password))
                navigation.navigate('EmailLogin');
        }
        else
            alert('As senhas não são iguais!');
    }

    return (
        <View style={style.View}>
            <Title style={style.Titulo}>Criar conta</Title>
            <View>
                <TextInput
                    keyboardType="email-address"

                    style={style.inputs}
                    onChangeText={(email) => setEmail(email)}
                    label='E-mail' 
                />
                <TextInput
                    style={style.inputs}
                    onChangeText={(pass) => setPassword(pass)}
                    label="Senha" 
                    secureTextEntry
                />
                <TextInput
                    style={style.inputs}
                    onChangeText={(pass) => setPasswordCheck(pass)}
                    label="Confirme a senha"
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
