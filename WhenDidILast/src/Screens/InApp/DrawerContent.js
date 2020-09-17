import React from 'react';
import { View, StyleSheet } from "react-native";
import { useTheme, Title, Drawer, Text, Switch, TouchableRipple } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { logout } from '../../api/firebase/login';
import { ThemeContext } from "../../Components/context";
import { GetList } from "../../api/firebase/category";
 
export default function DrawerContent(props) {
    const paperTheme = useTheme();
    const { toggleTheme } = React.useContext(ThemeContext);
    const teste = ['um', 'dois', 'tres'];

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
    }
        , []);
   

    return (
        <View style={
            paperTheme.dark ?
                styles.drawerContentDark
                :
                styles.drawerContentLight
        }>
            <Drawer.Section>
                <View style={styles.titleSection}>
                    <Title>When did You last...?</Title>
                </View>
            </Drawer.Section>

            <DrawerContentScrollView  {...props}
            >
                <Drawer.Section title='Categorias'>
                    <Drawer.Item
                        label='Ver todas'
                        icon='checkbox-multiple-blank-circle'
                        onPress={() => { props.navigation.navigate('Dashboard') }}
                    />
                    {categories.map((item) => (
                        <Drawer.Item
                            label={item.name}
                            icon={item.icon}
                            key={item.key} 
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
                    <Drawer.Item
                        label='Premium'
                        onPress={() => { }}
                    />
                    <TouchableRipple onPress={() => { toggleTheme() }}>
                        <View style={styles.preference}>
                            <Text>Modo escuro</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark} />
                            </View>
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
        </View>
    );
}




const styles = StyleSheet.create({
    drawerContentDark: {
        flex: 1,
        backgroundColor: '#266329'
    },
    drawerContentLight: {
        flex: 1,
        backgroundColor: '#81C784'
    },
    titleSection: {
        padding: 15,
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
