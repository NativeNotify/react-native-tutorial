import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import Header from '../../Headers/ContactDetailsHeader';
import Footer from '../../Footers/HomeFooter';

export default function ContactDetails({ navigation, index, setIndex, name, setName, age, setAge, homeTown, setHomeTown, contacts, setContacts }) {
    const handleDelete = () => {
        Alert.alert(
            "Are you sure you want to delete your contact?",
            "This cannot be undone!",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("CANCEL pressed."),
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => {
                        let newContacts = contacts;
                        newContacts.splice(index, 1);
                        setContacts(newContacts);
                        setIndex("");
                        setName("");
                        setAge("");
                        setHomeTown("");
                        navigation.navigate("Home");
                    },
                }
            ]
        )
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.text}>
                    <Text style={styles.boldText}>Name:</Text>   {name}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.boldText}>Age:</Text>   {age}
                </Text>   
                <Text style={styles.text}>
                    <Text style={styles.boldText}>Hometown:</Text>   {homeTown}
                </Text>    

                <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate("EditContact")}>
                    <Text style={styles.whiteText}>Edit Contact</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete()}>
                    <Text style={styles.whiteText}>Delete Contact</Text>
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
        paddingTop: 30
    },
    contactCont: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 12,
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
    editButton: {
        backgroundColor: '#3993DD',
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
        marginTop: 80
    },
    deleteButton: {
        marginBottom: 40,
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
        marginTop: 20
    },
    whiteText: {
        color: '#fff',
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20
    },
    text: {
        fontFamily: 'OpenSans_400Regular'
    },
    boldText: {
        fontFamily: 'OpenSans_600SemiBold'
    }
})