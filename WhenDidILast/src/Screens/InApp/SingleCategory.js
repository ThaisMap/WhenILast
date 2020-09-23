import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar, FAB } from 'react-native-paper';

import NewActivity from './NewActivity';

export default function SingleCategory({ route, navigation }) {
    const { name } = route.params;
    const { icon } = route.params;
    const { key } = route.params;

    return (
        <View style={style.View}>
            <Appbar.Header>
                <Appbar.Action icon='menu' onPress={() => { navigation.openDrawer() }} />
                <Appbar.Content title={name} />
            </Appbar.Header>
            <Text>{JSON.stringify(icon)}</Text>
            <Text>{JSON.stringify(key)}</Text>
            <FAB style={style.fab} icon='plus' 
            onPress={() => {
                navigation.navigate('NewActivity', {
                    categoryKey: key,
                    categoryName: name
                })
            }} />
        </View>
    );
}

const style = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: 'stretch',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});