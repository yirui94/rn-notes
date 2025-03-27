import * as React from 'react';
import {
    NavigationContainer,
 } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import StackNavigator from '@/components/StackNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer>
                        <StackNavigator />
                        <StatusBar translucent style="light" />
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    )
}