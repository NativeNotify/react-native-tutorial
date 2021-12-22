import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import axios from 'axios';

import Home from '../screens/Home/Home';
import CreateContact from '../screens/CreateContact/CreateContact';
import EditContact from '../screens/EditContact/EditContact';
import ContactDetails from '../screens/ContactDetails/ContactDetails';

const Stack = createNativeStackNavigator();
const prefix = Linking.createURL('/');

export default function AppNavigation({
    contacts,
    setContacts,
    index,
    setIndex,
    name,
    setName,
    age,
    setAge,
    homeTown,
    setHomeTown
}) {

    const navigationRef = useNavigationContainerRef();
    const routeNameRef = useRef();

    const linking = {
        prefix: [prefix],
        config: {
            screens: {
                Home: '',
                CreateContact: 'create-edit-contact',
                EditContact: 'edit-contact',
                ContactDetails: 'contact-details'
            }
        }
    };

    return (
        <NavigationContainer 
            linking={linking}
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef.getCurrentRoute().name;
            }}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.getCurrentRoute().name;

                console.log("previousRouteName, currentRouteName", previousRouteName, currentRouteName);
        
                if (previousRouteName !== currentRouteName) {
                    axios.post(`https://app.nativenotify.com/api/analytics`, {
                        app_id: your-app-id,
                        app_token: 'your-app-token',
                        screenName: currentRouteName
                    });
                }
        
                // Save the current route name for later comparison
                routeNameRef.current = currentRouteName;
            }}
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" options={{ title: "Home"}}>
                    {(props) => (
                        <Home {...props}
                            contacts={contacts}
                            setContacts={setContacts}
                            setIndex={setIndex}
                            setName={setName}
                            setAge={setAge}
                            setHomeTown={setHomeTown}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="CreateContact" options={{ title: "Create Contact"}} >
                    {(props) => (
                        <CreateContact {...props}
                            setContacts={setContacts}
                            name={name}
                            setName={setName}
                            age={age}
                            setAge={setAge}
                            homeTown={homeTown}
                            setHomeTown={setHomeTown}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="EditContact" options={{ title: "Edit Contact"}} >
                    {(props) => (
                        <EditContact {...props}
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
                    )}
                </Stack.Screen>
                <Stack.Screen name="ContactDetails" options={{ title: "Contact Details"}} >
                    {(props) => (
                        <ContactDetails {...props}
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
                    )}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )

}