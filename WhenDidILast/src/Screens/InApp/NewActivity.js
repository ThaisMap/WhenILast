import React, { Component } from 'react';
import { View, StyleSheet, Pressable } from "react-native";
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Appbar, Title, Text, TextInput, IconButton, FAB } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Create } from "../../api/firebase/activity";

export default class NewActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDatePicker: false,
            category: this.props.route.params.categoryKey,
            categoryName: this.props.route.params.categoryName,//navigation.getParam('categoryName', 'Sem nome'),
            date: new Date(),
            dateString: this.stringDate(new Date()),
            notify: false,
            name: '',
            notificationDays: 0,
            periodMultiplier: 1,
            comments: ''

        }
    }

    stringDate = (date) => {
        // 01, 02, 03, ... 29, 30, 31
        var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
        // 01, 02, 03, ... 10, 11, 12
        var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
        // 1970, 1971, ... 2015, 2016, ...
        var yyyy = date.getFullYear();
        return (dd + '/' + MM + '/' + yyyy);
    }

    handleDatePicked = (event, selectedDate) => {
        const datePicked = selectedDate || date;
        this.setState({
            showDatePicker: false,
            dateString: this.stringDate(datePicked),
            date: datePicked
        });
    };

    handleCalendarClick = () => {
        this.setState({ showDatePicker: true });
    };

    handleAlarmToggle = () => {
        this.setState({ notify: !this.state.notify });
    };

    handleNotificationDaysChange = (value) => {

        const dias = Number(value) * this.state.periodMultiplier;
        this.setState({ notificationDays: dias });
    };

    handleFabClick = () => {
        const activity = {
            name: this.state.name,
            category: this.state.category,
            notify: this.state.notify,
            notificationDays: this.state.notificationDays            
        };
        const date = {
            date: this.state.date,
            comment: this.state.comments,
        }; 
        Create(activity, date);
        this.props.navigation.goBack();
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
                        <Title>{this.state.categoryName}</Title>
                    </View>
                    <TextInput
                        style={style.inputs}
                        onChangeText={(activityName) => this.setState({ name: activityName })}
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

                            <Pressable onPress={this.handleCalendarClick} >
                                <TextInput 
                                    disabled
                                    value={this.state.dateString}
                                    style={style.inputs} />
                            </Pressable>
                        </View>
                    </View>
                    <Text>Lembrar após</Text>
                    <View style={style.lateral}>

                        <IconButton icon={this.state.notify ? 'alarm-check' : 'alarm-off'}
                            onPress={this.handleAlarmToggle} />
                        <View style={style.inputView}>
                            <TextInput
                                keyboardType='number-pad'
                                style={style.inputs}
                                onChangeText={(value) => this.handleNotificationDaysChange(value)}
                                placeholder='0' />
                        </View>
                        <View style={style.inputView}>
                            <Dropdown
                                placeholder='selecione'
                                style={style.inputs}
                                value={1}
                                onChangeText={(value) => this.setState({ periodMultiplier: value })}
                                data={periods} />
                        </View>
                    </View>
                    <TextInput
                        style={style.Biginputs}
                        multiline
                        onChangeText={(value) => this.setState({ comments: value })}
                        label='Comentário' />

                </View>
                <FAB style={style.fab} icon='check'
                    onPress={this.handleFabClick} />
            </View>
        );
    }
}

const periods = [
    { value: 1, label: 'dias' },
    { value: 7, label: 'semanas' },
    { value: 30, label: 'meses' },
    { value: 365, label: 'anos' },
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