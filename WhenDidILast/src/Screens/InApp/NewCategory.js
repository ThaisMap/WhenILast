import React, { Component } from 'react'
import { View, StyleSheet } from "react-native";
import { Title, TextInput, Button, IconButton } from 'react-native-paper';
import { Dropdown } from "react-native-material-dropdown-v2";

import { Create } from "../../api/firebase/category";

export default class reactApp extends Component {
    constructor(navigation) {
        super()
        this.state = {
            icon: 'help',
            name: ''
        }
    }

    updateIcon = (selected) => {
        this.setState({ icon: selected })
    }

    createCategory = () => {
        if (Create(this.state)) {
            alert(`Categoria "${this.state.name}" criada`)
            this.cleanState();
        }
        else {
            alert("Algo deu errado");
        }
    }

    cleanState = () => {
        this.setState({
            icon: 'help',
            name: ''
        });
    }

    updateName = (newName) => {
        this.setState({ name: newName })
    }

    render() {
        return (
            <View style={style.view}>
                <Title style={style.title}>Criar Categoria</Title>
                <View>
                    <TextInput style={style.input}
                        value={this.state.name}
                        onChangeText={(newName) => this.updateName(newName)} label='Nome da categoria' />
                    <View style={style.lateral}>
                        <View style={style.dropdown}>
                            <Dropdown
                                label='Icone'
                                onChangeText={(value) => this.updateIcon(value)}
                                data={possibleIcons}
                            />
                        </View>
                        <IconButton style={style.iconButton} icon={this.state.icon} size={24} />
                    </View>
                    <Button style={style.button} mode='contained' onPress={() => this.createCategory()}>Salvar</Button>
                </View>
            </View>
        );
    }
}

const possibleIcons = [
    { value: 'alert', label: 'Alerta' },
    { value: 'block-helper', label: 'Parar' },
    { value: 'bomb', label: 'Bomba' },
    { value: 'car', label: 'Carro' },
    { value: 'home', label: 'Casa' },
    { value: 'phone', label: 'Ligações' },
    { value: 'book', label: 'Livro' },
    { value: 'human', label: 'Saúde' },
    { value: 'airplane', label: 'Avião' }
];

const style = StyleSheet.create({
    view: {
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'center',
        marginVertical: 15
    },
    input: {
        marginHorizontal: 20,
        backgroundColor: 'transparent'
    },
    dropdown: {
        flex: 1
    },
    iconButton: {
        width: '20%'
    },
    lateral: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginHorizontal: 20
    },
    button: {
        alignSelf: 'center',
        width: '40%',
        marginTop: 20
    }
});