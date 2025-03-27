// Homepage
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
  PlatformPressable,
} from '@react-navigation/elements';

import {
  Category,
} from '@/constants/Constants';
const WorkIcon = require('@/assets/images/WorkStudy.png')
const LifeIcon = require('@/assets/images/Life.png')
const HealthIcon = require('@/assets/images/HealthWellness.png')
const RecentIcon = require('@/assets/images/RecentClock.png')
const RightChevronIcon = require('@/assets/images/RightChevronAccented.png')

export default function HomeScreen() {
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
    //TODO: Extract LinearGradient into HOC
    //TODO: Adjust gradient angle, low priority
    <LinearGradient 
      colors={['#1B284F', '#351159', '#421C45']} 
      style={styles.gradientContainer}
    >
    <ScrollView>
        <View
          style={{...styles.titleContainer, marginBottom: 26, marginTop: 20 }}
        >
          <Image source={RecentIcon} />
          <Text style={styles.recentText}>Recently Created Notes</Text>
        </View>
        {ListOfCategories.map((entry, index) => {
          return (
            <View key={index} style={styles.categoryContainer}>
              <View style={styles.titleContainer}>
                {renderIcon(entry[0])}
                <Text style={styles.titleText}>{entry[0]}</Text>
              </View>
              {/* Latest on the top */}
              {entry[1].slice(-3).reverse().map((note, index) => {
                return (
                  <PlatformPressable
                    key={entry[0] + index}
                    onPress={() => {}}
                    style={styles.buttonContainer}
                  >
                    <View style={styles.buttonSubContainer}>
                        <Text
                            style={styles.text}
                        >
                            {note}
                            {/* Task says to slice 20 but mockup differs, looks weird when sliced so I followed mockup */}
                            {/* {note.slice(0, 20)} */}
                        </Text>
                    </View>
                    <Image style={styles.chevron} source={RightChevronIcon} />
                  </PlatformPressable>
                )
              })}
            </View>
          )
        })}
      </ScrollView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    marginTop: -20,
    padding: 20,
    paddingBottom: 40
  },
  categoryContainer: {
    marginBottom: 27,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  recentText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#BEBCCB'
  },
  titleText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },
  text: {
    flex: 1,
    color: '#fff'
  },
  chevron: {
    marginLeft: 14,
  },
  buttonContainer: {
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
  buttonSubContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
  },
})