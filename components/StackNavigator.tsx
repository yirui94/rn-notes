import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import {
    Header,
    getHeaderTitle,
} from '@react-navigation/elements';

import {
    Color,
} from '@/constants/Constants';
import SettingsScreen from '@/screens/SettingsScreen';
import NewNoteScreen from '@/screens/NewNoteScreen';
import Tabs from '@/components/TabNavigator'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const inset = useSafeAreaInsets();
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackButtonDisplayMode: 'minimal',
                header: ({ options, route, back }) => (
                    <Header
                      {...options}
                      back={back}
                      title={getHeaderTitle(options, route.name)}
                      headerTitleAlign={'left'}
                      headerTintColor={'#fff'}
                      headerTitleStyle={{
                        fontWeight: 'bold',
                        fontSize: 24,
                      }}
                      headerLeftContainerStyle={{
                        paddingLeft: 20
                      }}
                      headerStyle={{
                        height: 68 + inset.top,
                        backgroundColor: Color.headerBackgroundColor,
                        borderBottomLeftRadius: 20, 
                        borderBottomRightRadius: 20, 
                      }}
                    />
                  ),
            }}
        >
            <Stack.Screen
                name="Root"
                component={Tabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="New Note"
                component={NewNoteScreen}
            />
            <Stack.Screen
                name="Settings" 
                component={SettingsScreen}
            />
        </Stack.Navigator>
    )
}