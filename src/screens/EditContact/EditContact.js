import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import Header from '../../Headers/EditContactHeader';
import Footer from '../../Footers/HomeFooter';

export default function EditContact({ navigation, index, setIndex, name, setName, age, setAge, homeTown, setHomeTown, contacts, setContacts }) {
    const handlePost = () => {
        setContacts(
            contacts.map((e, i) => {
                if(i == index) {
                    return { name: name, age: age, homeTown: homeTown }
                } else { return e }
            })
        );
        setIndex("");
        setName("");
        setAge("");
        setHomeTown("");
        navigation.navigate("Home");
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder={"Full Name"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setAge(text)}
                    value={age}
                    placeholder={"Age"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setHomeTown(text)}
                    value={homeTown}
                    placeholder={"Hometown (city, state)"}
                />
                <TouchableOpacity style={styles.button} onPress={() => handlePost()}>
                    <Text style={styles.createText}>Edit Contact</Text>
                </TouchableOpacity>
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
    },
    body: {
        flex: 8.5,
        width: '100%',
        padding: '5%',
        paddingTop: 80,
    },
    input: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 3,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    button: {
        marginBottom: 40,
        marginTop: 20,
        backgroundColor: '#BF4342',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    createText: {
        color: '#fff',
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20
    }
})