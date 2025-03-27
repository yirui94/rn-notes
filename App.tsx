import * as React from 'react';
import {
    NavigationContainer,
 } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import StackNavigator from '@/components/StackNavigator';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <StackNavigator />
                    <StatusBar translucent style="light" />
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    )
}