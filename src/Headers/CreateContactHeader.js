import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CreateContactHeader({ contacts }) {
    return (
        <View style={styles.headerCont}>
            <Text style={styles.text}>Create Contact</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCont: {
        flex: 0.5, 
        width: '100%',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'OpenSans_700Bold'
    }
})