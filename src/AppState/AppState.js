import React, { useState, useEffect } from 'react';
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

import AppNavigation from '../AppNavigation/AppNavigation';

export default function AppState() {
    const [contacts, setContacts] = useState([{ name: 'John', age: '27', homeTown: 'Jackson, Mississippi'}, { name: 'Tim', age: '20', homeTown: 'Panama City, Florida'}]);
    const [index, setIndex] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [homeTown, setHomeTown] = useState('');

    let [fontsLoaded] = useFonts({ OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold });

    if(!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <AppNavigation 
            contacts={contacts}
            setContacts={setContacts}
            index={index}
            setIndex={setIndex}
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            homeTown={homeTown}
            setHomeTown={setHomeTown}
        />
    )
}