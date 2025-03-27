// Settings
import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    Modal,
    Pressable,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {
    PlatformPressable,
    Button,
} from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch } from '@/redux/hooks';
import { deleteAll } from '@/redux/notesSlice';

import {
    Color,
    Settings,
} from '@/constants/Constants';
import LinearGradientView from '@/components/LinearGradientView';
const UserAgreementIcon = require('@/assets/images/UserAgreement.png')
const AboutUsIcon = require('@/assets/images/AboutUs.png')
const ChatIcon = require('@/assets/images/Chat.png')
const PrivacyPolicyIcon = require('@/assets/images/PrivacyPolicy.png')
const RightChevronIcon = require('@/assets/images/RightChevronAccented.png')
  
export default function SettingsScreen() {
    const insets = useSafeAreaInsets();
    const dispatch = useAppDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    const onDeleteButton = () => {
        dispatch(deleteAll());
        setModalVisible(true);
    }

    const ListOfCategories = Object.values(Settings);

    const renderIcon = (categoryName: string) => {
        switch(categoryName) {
            case Settings.AboutUs:
                return (
                    <Image source={AboutUsIcon} />
                )
            case Settings.Customer:
                return (
                    <Image source={ChatIcon} />
                )
            case Settings.PrivacyPolicy:
                return (
                    <Image source={PrivacyPolicyIcon} />
                )
            case Settings.UserAgreement:
                return (
                    <Image source={UserAgreementIcon} />
                )
            default: 
                return;
        }
    }

    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
          onShow={() => {
            setTimeout(() => setModalVisible(false), 2000);
          }}
        >
            <View style={styles.modalView} >
                <Pressable onPress={() => {
                    setModalVisible(false);
                }}>
                    <LinearGradient 
                        colors={['#C724E1', '#4E22CC']} 
                        style={styles.pill}
                        >
                        <Text style={styles.modalText}>
                            {'All notes have been cleared'}
                        </Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </Modal>
        <LinearGradientView
            style={styles.gradientContainer}
        >
            <ScrollView>
                {ListOfCategories.map(categoryName => {
                    return (
                        <PlatformPressable
                            key={categoryName}
                            onPress={() => {}}
                            style={styles.buttonContainer}
                        >
                            <View style={styles.buttonSubContainer}>
                                {renderIcon(categoryName)}
                                <Text
                                    style={styles.text}
                                    numberOfLines={2}
                                >
                                    {categoryName}
                                </Text>
                            </View>
                            <Image style={styles.chevron} source={RightChevronIcon} />
                        </PlatformPressable>
                    )
                })}
                </ScrollView>
            </LinearGradientView>
            {/* Extract to bottom pseudoTab Component */}
            <View style={{ ...styles.bottomTab, height: 90 + insets.bottom }}>
                <Button
                    style={styles.button}
                    onPress={onDeleteButton}
                    color={'#fff'}
                >
                    {'Delete All Notes'}
                </Button>
            </View>
        </>
    );
  }
  
const styles = StyleSheet.create({
    gradientContainer: {
        padding: 20,
        paddingBottom: 40
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    chevron: {
        marginLeft: 14,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54,
        borderRadius: 16,
        padding: 15,
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.12)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    buttonSubContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: '50%',
        maxWidth: 400,
        backgroundColor: Color.accentColor,
        color: '#fff'
    },
    bottomTab: {
        backgroundColor: Color.tabBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        marginLeft: 16,
        color: '#fff'
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    pill: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 76,
        width: 170,
        borderRadius: 20,
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }
})