import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Appbar, Title, Text, TextInput, IconButton, FAB } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: '', 
            showDatePicker: false, 
            activity: {
                date: new Date(),
                notifications: false,
                name: '',
                notificationDays: 0,
                comments: ''
            }
        }
    }

    handleDatePicked = (event, selectedDate) => {
        const datePicked = selectedDate || date;
        this.setState({
            showDatePicker: false,
            dateString: `${datePicked.getDate()}/${datePicked.getMonth() + 1}/${datePicked.getFullYear()}`,
            activity:{ date: datePicked }
        });
        console.log(this.state.date);
    };

    handleCalendarClick = () => {
        this.setState({ showDatePicker: true });
    };

    handleAlarmToggle = () => {
        this.setState({ activity:{ notifications: !this.state.notifications }});
    };

    render() {
        return (
            <View style={style.mainView}>
                <Appbar.Header>
                    <Appbar.Action icon='menu' onPress={() => { this.props.navigation.openDrawer() }} />
                    <Appbar.Content title='Nova atividade' />
                </Appbar.Header>
                <View style={style.conteudo}>
                    <View style={style.lateral}>
                        <Title>Categoria: </Title>
                        <Title>{this.props.categoryName}</Title>
                    </View>
                    <TextInput
                        style={style.inputs}
                        placeholder='Atividade' />

                    {this.state.showDatePicker && (
                        <DateTimePicker
                            value={this.state.date}
                            mode='date'
                            display="default"
                            onChange={this.handleDatePicked}
                        />
                    )}
                    <View style={style.lateral}>
                        <IconButton icon='calendar' onPress={this.handleCalendarClick} />
                        <View style={style.inputView}>
                            <TextInput
                                keyboardType='number-pad'
                                placeholder='Escolha uma data'
                                disabled
                                value={this.state.dateString}
                                style={style.inputs}
                            />
                        </View>
                    </View>
                    <Text>Lembrar após</Text>
                    <View style={style.lateral}>

                        <IconButton icon={this.state.activity.notifications ? 'alarm-check' : 'alarm-off'} 
                        onPress={this.handleAlarmToggle} />
                        <View style={style.inputView}>
                            <TextInput
                                keyboardType='numeric'
                                style={style.inputs}
                                placeholder='0' />
                        </View>
                        <View style={style.inputView}>
                            <Dropdown placeholder='selecione' style={style.inputs} data={periods} />
                        </View>
                    </View>
                    <TextInput
                        style={style.Biginputs}
                        multiline
                        label='Observações' />

                </View>
                <FAB style={style.fab} icon='check'
                    onPress={() => {
                        this.props.navigation.goBack()
                    }} />
            </View>
        );
    }



}

const periods = [
    { value: 'dias' },
    { value: 'semanas' },
    { value: 'meses' },
    { value: 'anos' },
];

const style = StyleSheet.create({
    inputs: {
        marginVertical: 5,
        marginRight: 20,
        height: 50,
        backgroundColor: 'transparent'
    },
    Biginputs: {
        marginVertical: 5,
        marginRight: 20,
        backgroundColor: 'transparent'
    },
    title: {
        alignSelf: 'center'
    },
    mainView: {
        flex: 1,
        alignItems: 'stretch',
    },
    conteudo: {
        paddingLeft: 20,
        paddingTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    lateral: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputView: {
        flex: 1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});