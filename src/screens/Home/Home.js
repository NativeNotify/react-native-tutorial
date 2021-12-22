import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../../Headers/HomeHeader';
import Footer from '../../Footers/HomeFooter';

export default function Home({ navigation, contacts, setContacts, setIndex, setName, setAge, setHomeTown }) {
    useEffect(() => {
        setContacts(contacts);
    }, [contacts]);

    const handleOpen = (contactInfo, index) => {
        setIndex(index);
        setName(contactInfo.name);
        setAge(contactInfo.age);
        setHomeTown(contactInfo.homeTown);

        navigation.navigate("ContactDetails");
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.scrollViewCont}>
                    <TouchableOpacity style={styles.createContactButton} onPress={() => navigation.navigate("CreateContact")}>
                        <Text style={styles.createText}>Create Contact</Text>
                    </TouchableOpacity>
                    {contacts.map((e, i) => {
                        return (
                            <TouchableOpacity 
                                style={styles.contactCont} 
                                key={i} 
                                onPress={() => handleOpen(e, i)}
                            >
                                <Text style={styles.text}>
                                    <Text style={styles.boldText}>Name:</Text>   {e.name}
                                </Text>              
                            </TouchableOpacity>   
                        )
                    })}
                </ScrollView>
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
        
    },
    scrollViewCont: {
        padding: '5%',
        paddingTop: 30
    },
    createContactButton: {
        marginBottom: 40,
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
    },
    createText: {
        color: '#fff',
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20
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
    text: {
        fontFamily: 'OpenSans_400Regular'
    },
    boldText: {
        fontFamily: 'OpenSans_600SemiBold'
    }
})