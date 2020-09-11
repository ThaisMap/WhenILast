import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';


GoogleSignin.configure({
    webClientId: '975121724951-0dp1v2a39u7hnvkv24khbbl5jn9meqtf.apps.googleusercontent.com',
});

export async function signInWithGoogle() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export function signInwithEmail(email, password) {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => { })
        .catch((error) => {
            if (error.code === 'auth/wrong-password') {
                alert('Senha incorreta!');
            }
            if (error.code === 'auth/user-not-found') {
                alert('E-mail não cadastrado! ');
            }
            console.log(error.code);
        }); 
}

export function sendResetEmail(email) {
    auth().sendPasswordResetEmail(email);
    alert("Você receberá um link para alteração de senha no e-mail informado.");
}

export function signUp(email, password) {
    let worked = false;
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => worked = true)
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('E-mail já cadastrado.');
            }

            if (error.code === 'auth/invalid-email') {
                Alert.alert('Endereço de e-mail inválido!');
            }
            console.log(error.code);
            worked = false;
        });
    console.log(email);
    console.log(password);
    return worked;
}

export function logout() {
    auth().signOut();
}