import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Provider from './context/Provider'
import {HomeScreen, SettingsScreen, FinishScreen} from './screens'


const Stack = createStackNavigator();

const Router = () => {
    return (
        <Provider>
             <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="FinishScreen" component={FinishScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

export default Router