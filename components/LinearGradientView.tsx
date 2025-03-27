import { LinearGradient } from 'expo-linear-gradient';
import {
    StyleSheet,
    ViewStyle,
} from "react-native";
import type { ReactNode } from 'react';

export default function LinearGradientView({ children, style }: { children: ReactNode, style: ViewStyle }) {
    return (
        <LinearGradient 
              colors={['#1B284F', '#351159', '#421C45']} 
              // TODO: extract to constants
              style={{ ...styles.gradientContainer, ...style }}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientContainer: {
      flex: 1,
      marginTop: -20,
    },
});