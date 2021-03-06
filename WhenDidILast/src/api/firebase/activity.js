import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const activitiesRef = firestore().collection('activities');
const datesRef = firestore().collection('dates');

export async function Create(object, date) {
    const user = auth().currentUser;
    let works = true;
    const activity = {
        ...object,
        uid: user.uid
    }
    if (validateActivity(object)) {
        let NewId = '0'; 
        await activitiesRef.add(activity)
            .then((act) => {
                NewId = act._documentPath._parts[1]
                AddDate({ ...date, activity: NewId })
            })
            .catch((error) => console.log(error));
    }
    else {
        console.log('Failed validation');
    }
}

async function AddDate(object) {
    const user = auth().currentUser;
    const date = { ...object, uid: user.uid };
    await datesRef.add(date)
        .then((act) => NewId = act._documentPath._parts[1])
        .catch((error) => console.log(error));
}

function validateActivity(activity) {
    return (
        activity.name != '' &&
        (!activity.notify || activity.notificationDays > 0)
    );
}

export async function GetActivitiesFromCategory(categoriesId, activitiesRetrieved) {
    const user = auth().currentUser;
    activitiesRef.where('uid', '==', user.uid).where('category', '==', categoriesId).onSnapshot((snap) => {
        const activities = [];

        snap.forEach(doc => {
            activities.push({
                ...doc._data,
                key: doc.id,
            });
        });
        activitiesRetrieved(activities);
    }, onError);

};

function onError(error) {
    console.error(error);
}

export async function GetAllActivities (activitiesRetrieved) {
    const user = auth().currentUser;
    activitiesRef.where('uid', '==', user.uid).onSnapshot((snap) => {
        const activities = [];

        snap.forEach(doc => {
            activities.push({
                ...doc._data,
                key: doc.id,
            });
        });
        activitiesRetrieved(activities);
    }, onError);

};
