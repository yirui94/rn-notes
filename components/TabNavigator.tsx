import * as React from 'react';
import { Image } from 'react-native';
import {
    useNavigation,
 } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { PlatformPressable } from '@react-navigation/elements';

import {
    Color,
} from '@/constants/Constants';
import HomeScreen from '@/screens/HomeScreen';
import SummaryScreen from '@/screens/SummaryScreen';
import TabBar from '@/components/TabBar';

const SettingsIcon = require('@/assets/images/setting.png')
const RobotIcon = require('@/assets/images/Robot.png')

const Tab = createBottomTabNavigator();

export default function Tabs() {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();

    const onSettingsPress = () => {
        // @ts-ignore
        navigation.navigate('Settings');
    };
    
    const headerOptions: BottomTabNavigationOptions = {
        headerStyle: {
            height: 68 + inset.top,
            backgroundColor: Color.headerBackgroundColor,
            borderBottomLeftRadius: 20, 
            borderBottomRightRadius: 20, 
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: {
            paddingLeft: 4,
            fontWeight: 'bold',
            fontSize: 24,
        },
    }

    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
                animation: 'none',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    ...headerOptions,
                    headerRight: () => (
                        <PlatformPressable
                            onPress={onSettingsPress}
                            style={{
                                paddingRight: 22
                            }}
                        >
                            <Image source={SettingsIcon} />        
                        </PlatformPressable>
                    )
                }}
            />
            <Tab.Screen
                name="Summary"
                component={SummaryScreen}
                options={{
                    ...headerOptions,
                    headerStyle: {
                        height: 68 + inset.top,
                    },
                    headerTransparent: true,
                    headerRight: () => (
                        <Image source={RobotIcon} />        
                    )
                }}
            />
        </Tab.Navigator>
    );
}