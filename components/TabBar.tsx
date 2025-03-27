import {
    View,
    StyleSheet,
    Image,
} from "react-native";
import {
    Color,
} from '@/constants/Constants';
import { useLinkBuilder } from '@react-navigation/native';
import { Label, PlatformPressable } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const NewNoteIcon = require('@/assets/images/NewNote.png')
const SummaryActive = require('@/assets/images/SummaryActive.png')
const SummaryInactive = require('@/assets/images/SummaryInactive.png')
const HomeActive = require('@/assets/images/HomeActive.png')
const HomeInactive = require('@/assets/images/HomeInactive.png')

// @ts-ignore
export default function TabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets();
    const { buildHref } = useLinkBuilder();
    const routes = [state.routes[0], {"name": "New Note"}, state.routes[1]]

    const renderTabIcon = (routeName: string, isFocused: boolean) => {
        switch(routeName) {
            case "Home":
                return isFocused ? (
                    <Image source={HomeActive} style={styles.icon} />
                ) : (
                    <Image source={HomeInactive} style={styles.icon} />
                )
            case "Summary":
                return isFocused ? (
                    <Image source={SummaryActive} style={styles.icon} />
                ) : (
                    <Image source={SummaryInactive} style={styles.icon} />
                )
            default:
                return;
        } 
    } 

    return (
        <View style={{ ...styles.container, height: 90 + insets.bottom }}>
            {routes.map((route: { key: string | number; name: string; params: object | undefined; }, index: any) => {
                const label = route.name;

                const currentIndex = state.index === 0 ? 0 : state.index + 1 
                const isFocused = currentIndex === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                if (route.name === 'New Note') {
                    return (
                        <PlatformPressable
                            key={index}
                            href={buildHref(route.name, route.params)}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <Image source={NewNoteIcon} />        
                        </PlatformPressable>
                    )
                }

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabIconContainer}
                    >
                        {renderTabIcon(route.name, isFocused)}
                        <Label style={isFocused ? styles.labelActive : styles.labelInactive}>
                            {label}
                        </Label>
                    </PlatformPressable>
                );
            })}
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Color.tabBackgroundColor,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabIconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 6,
    },
    labelInactive: {
        color: Color.tabTextColor
    },
    labelActive: {
        color: Color.accentColor
    }
})