import Constants from 'expo-constants';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function HomeFooter({ navigation }) {
    return (
        <View style={styles.footerCont}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="home" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerCont: {
        flex: 1, 
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingBottom: 20
    }
})