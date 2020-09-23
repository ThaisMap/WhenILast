import React from 'react';
import { View, StyleSheet } from "react-native";
import { useTheme, Title, Drawer, Text, Switch, TouchableRipple, Surface } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { logout } from '../../api/firebase/login';
import { ThemeContext } from "../../Components/context";
import { GetList } from "../../api/firebase/category";

export default function DrawerContent(props) {
    const paperTheme = useTheme();
    const { toggleTheme } = React.useContext(ThemeContext);
    const DrawerItemsData = [];

    const [categories, setCategories] = React.useState([]);

    const onListReceived = listReceived => {
        setCategories(listReceived);
        categories.forEach(item => {
            DrawerItemsData.push({
                label: item.name,
                icon: item.icon,
                key: item.key
            })
        })
    }

    React.useEffect(() => {
        GetList(onListReceived);
    }, []);


    return (
        <Surface style={styles.surface}>
                <View style={
                    paperTheme.dark ?
                        styles.titleSectionDark
                        :
                        styles.titleSectionLight
                }>
                    <Title>When did You last...?</Title>
                </View>

            <DrawerContentScrollView  {...props}
            >
                <Drawer.Section title='Categorias'>
                    <Drawer.Item
                        label='Ver todas'
                        icon='checkbox-multiple-blank-circle'
                        onPress={() => { props.navigation.navigate('Dashboard', { trial: 'stand your ground' }) }}
                    />
                    {categories.map((item) => (
                        <Drawer.Item
                            label={item.name}
                            icon={item.icon}
                            key={item.key}
                            onPress={() => {
                                props.navigation.navigate('SingleCategory', {
                                    name: item.name,
                                    icon: item.icon,
                                    key: item.key
                                })
                            }}

                        />
                    ))}
                </Drawer.Section>
                <Drawer.Section>
                    <Drawer.Item
                        label='Nova Categoria'
                        icon='plus'
                        onPress={() => { props.navigation.navigate('NewCategory') }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferências">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                        <View style={styles.preference}>
                            <Text>Modo escuro</Text> 
                                <Switch value={paperTheme.dark} /> 
                        </View>
                    </TouchableRipple>

                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label='Sair'
                    icon='arrow-left'
                    onPress={logout}
                />
            </Drawer.Section>
        </Surface>
    );
}
 

const styles = StyleSheet.create({
    surface: {
        flex: 1,
        elevation: 2
    },
    titleSectionDark: {
        padding: 15,
        backgroundColor: '#266329'
    },
    titleSectionLight: {
        padding: 15,
        backgroundColor: '#81C784'
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 10
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
