import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Provider from './context/Provider'
import { 
    HomeScreen, 
    SettingsScreen, 
    FinishScreen, 
    SolveaQuestion, 
    SSS, 
    SubjectStudy, 
    TrafficSigns, 
    SubjectScreen,
    TrafficScreen 
} from './screens'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const Router = () => {
    const TabNavigator = () => {
        
        return (
            <Tab.Navigator initialRouteName="SolveaQuestion">
                <Tab.Screen
                    name="SolveaQuestion"
                    component={SolveaQuestion}
                    options={{}}
                />
                <Tab.Screen
                    name="SSS"
                    component={SSS}
                />
                <Tab.Screen
                    name="SubjectStudy"
                    component={SubjectStudy}
                />
                <Tab.Screen
                    name="TrafficSigns"
                    component={TrafficSigns}
                />
            </Tab.Navigator>
        )
    }
    return (
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="TabNavigator"
                        component={TabNavigator}
                    />
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SettingsScreen"
                        component={SettingsScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="FinishScreen"
                        component={FinishScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SubjectScreen"
                        component={SubjectScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TrafficScreen"
                        component={TrafficScreen}
                        options={{ headerShown: false }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Router