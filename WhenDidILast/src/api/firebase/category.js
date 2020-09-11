import React from 'react';
import auth from '@react-native-firebase/auth';

const user = auth().currentUser;

export const Create = (objeto) => {alert(user.uid)};