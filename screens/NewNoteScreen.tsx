// New Note Screen
import React, { useState } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";
import {
  Button,
} from '@react-navigation/elements';
import {
  useNavigation,
} from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { useAppDispatch } from '@/redux/hooks';
import { addNote } from '@/redux/notesSlice';

import {
  Color,
  Category,
} from '@/constants/Constants';
import LinearGradientView from '@/components/LinearGradientView';
const DownIcon = require('@/assets/images/DownChevron.png')
const UpIcon = require('@/assets/images/UpChevron.png')

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false);
  const [currentCategory, setcurrentCategory] = useState(null)
  const [items, setItems] = useState([
    {label: Category.Work, value: Category.Work },
    {label: Category.Life, value: Category.Life },
    {label: Category.Health, value: Category.Health },
  ]);
  const [note, setNote] = useState('')
  
  const handleSubmit = () => {
    // TODO: Handle error states 
    if (currentCategory === null) return;
    if (note === '') return;
    dispatch(addNote({ category: currentCategory, note }))
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <>
    <LinearGradientView
      style={styles.gradientContainer}
    >
      <View style={{ marginTop: 26, marginBottom: 26 }}>
        <DropDownPicker
          open={open}
          value={currentCategory}
          items={items}
          setOpen={setOpen}
          setValue={setcurrentCategory}
          setItems={setItems}
          placeholder={'Choose a category'}
          dropDownContainerStyle={styles.dropdownContainer}
          style={styles.buttonContainer}
          textStyle={styles.text}
          showTickIcon={false}
          ArrowDownIconComponent={() => <Image source={DownIcon} />}
          ArrowUpIconComponent={() => <Image source={UpIcon} />}
        />
      </View>
      <TextInput
        editable
        multiline
        numberOfLines={8}
        maxLength={200}
        onChangeText={text => setNote(text)}
        value={note}
        style={styles.textInput}
        textAlign={'left'}
        textAlignVertical={'top'}
        placeholder={'Please input note content'}
        placeholderTextColor={'#fff'}
        onSubmitEditing={handleSubmit}
      />
      </LinearGradientView>
      {/* Extract to bottom pseudoTab Component */}
      <View style={{ ...styles.bottomTab, height: 90 + insets.bottom }}>
          <Button
              style={styles.button}
              onPress={handleSubmit}
              color={'#fff'}
          >
              {'Save'}
          </Button>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
      padding: 20,
      paddingBottom: 40,
      justifyContent: 'flex-start',
  },
  container: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
  },
  chevron: {
      marginLeft: 14,
  },
  dropdownContainer: {
      flex: 1,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.12)',
      backgroundColor: Color.headerBackgroundColor,
  },
  buttonContainer: {
      height: 54,
      borderRadius: 16,
      padding: 15,
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
      color: '#fff'
  },
  textInput: {
    maxHeight: 300,
    flex: 1,
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#fff',
  },
})