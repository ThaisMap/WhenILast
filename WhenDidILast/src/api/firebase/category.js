import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const categoriesRef = firestore().collection('categories');


export const Create = (objeto) => {
    const user = auth().currentUser;
    const newCategory = {
        uid: user.uid,
        name: objeto.name, 
        icon: objeto.icon
    };
    let works =  true; 
    console.log(newCategory.uid);
    categoriesRef.add(newCategory) 
    .catch((error) =>  {console.log(error); 
    works = false});
    return works;
};

