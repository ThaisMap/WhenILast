import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const categoriesRef = firestore().collection('categories');


export const Create = (objeto) => {
    const user = auth().currentUser;
    const newCategory = {
        ...objeto,
        uid: user.uid        
    };
    let works = true;
    if (newCategory.name == '' || newCategory.icon == '') { works = false; }
    else {
        console.log(newCategory.uid);
        categoriesRef.add(newCategory)
            .catch((error) => {
                console.log(error);
                works = false
            });
    }
    return works;
};


export async function GetList(categoriesRetrieved) {
    const user = auth().currentUser;
    categoriesRef.where('uid', '==', user.uid).onSnapshot((snap) => {
        const categories = [];

        snap.forEach(doc => {
            categories.push({
                ...doc._data,
                key: doc.id,
            });
        });
        categoriesRetrieved(categories);
    }, onError);

};

function onError(error) {
    console.error(error);
}