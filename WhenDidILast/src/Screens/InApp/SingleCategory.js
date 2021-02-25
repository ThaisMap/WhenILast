import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, FAB, Portal, Dialog, Surface } from 'react-native-paper';
import { GetActivitiesFromCategory } from "../../api/firebase/activity";
 
import NewActivityDialog from './NewActivityDialog';

export default function SingleCategory({ route, navigation }) {
    const { name } = route.params;
    const { icon } = route.params;
    const { key } = route.params;
    const [visible, setVisible] = React.useState(false);
    const [activities, setActivities] = React.useState([]);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const onListReceived = listReceived => {
        setActivities(listReceived);
         
        console.log(activities);
    }

    const teste = () => console.log(activities);

    React.useEffect(() => {
        setActivities([]);
        GetActivitiesFromCategory(key, onListReceived);
        console.log(`chamada para ${name} - ${key}`)
    }, [name]);


    return (
        <View style={style.View}>
            <Appbar.Header>
                <Appbar.Action icon='menu' onPress={() => { navigation.openDrawer() }} />
                <Appbar.Content title={name} />
            </Appbar.Header>
         
            

            <FAB style={style.fab} icon='plus' onPress={showDialog} />


            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog} contentContainerStyle={style.modalContent}>
                    <Dialog.Title> Categoria: {name}
                    </Dialog.Title>
                    <Surface>
                        <NewActivityDialog
                            onSave={hideDialog}
                            categoryKey={key} />
                    </Surface>
                </Dialog>
            </Portal>
        </View >
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
    modalContent: {
        height: 200,
        margin: 20,
    }
});