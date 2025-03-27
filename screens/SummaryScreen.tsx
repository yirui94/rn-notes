// SummaryScreen
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useAppSelector } from '@/redux/hooks';
import { selectAllNotes  } from "@/redux/notesSlice";
import {
  Button,
} from '@react-navigation/elements';
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import {
  Color,
  Category
} from '@/constants/Constants';
const WorkIcon = require('@/assets/images/WorkMemoji.png')
const LifeIcon = require('@/assets/images/LifeMemoji.png')
const HealthIcon = require('@/assets/images/HealthMemoji.png')

export default function SummaryScreen() {
  //TODO: Extract LinearGradient into HOC
  const inset = useSafeAreaInsets();
  const notes = useAppSelector(selectAllNotes);
  const ListOfCategories: [string, string[]][] = Object.entries(notes)

  const renderIcon = (categoryName: string) => {
    switch(categoryName) {
        case Category.Work:
            return (
                <Image source={WorkIcon} />
            )
        case Category.Life:
            return (
                <Image source={LifeIcon} />
            )
        case Category.Health:
            return (
                <Image source={HealthIcon} />
            )
        default: 
            return;
    }
  }

  return (
    //TODO: Adjust gradient angle, low priority
    <LinearGradient 
      colors={['#1B284F', '#351159', '#421C45']} 
      // TODO: extract to constants
      style={{ ...styles.gradientContainer, paddingTop: 40 + 68 + inset.top + 20 }}
    >
      <View style={styles.scrollViewContainer}>
        <ScrollView>
        {ListOfCategories.map((entry, index) => {
          return (
            <View key={index}>
              <View style={styles.categoryContainer}>
                <View style={styles.titleContainer}>
                  {renderIcon(entry[0])}
                  <Text style={styles.titleText}>{entry[0]}</Text>
                </View>
                <Button
                  style={styles.button}
                  onPress={() => {}}
                  color={'#fff'}
                >
                    {'Detail'}
                </Button>
              </View>
              <View style={styles.recordContainer}>
                <Text
                    style={styles.text}
                >
                  {`This topic has a total of ${entry[1].length} records.`}
                </Text>
              </View>
            </View>
          )
        })}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    marginTop: -20,
    paddingTop: 40,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
  recordContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 74,
    borderRadius: 16,
    padding: 15,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(48, 24, 24, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  button: {
    width: 100,
    height: 44,
    backgroundColor: Color.accentColor,
  },
  text: {
    color: '#BEBCCB'
  },
})