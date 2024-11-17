import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import * as React from 'react'

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

import {
  View,
  TextInput,
  Text,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native'
import { FieldError } from 'react-hook-form'
interface Props extends TextInputProps {
  name: string
  label?: string
  labelStyle?: TextStyle
  error?: FieldError | undefined
}


export default function TabTwoScreen() {
  const {currentTheme, toggleTheme} = useTheme();

  return (
<View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: currentTheme.background, dark: currentTheme.background }}

        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
          }>
      <ThemedView style={[styles.titleContainer, { backgroundColor: currentTheme.background }]}>
        <ThemedText type="title">BarterBuy</ThemedText>
      </ThemedView>
    
    </ParallaxScrollView>
      <View style={[styles.footer, { backgroundColor: currentTheme.background }]}>
      <Text style={[styles.baseText, { color: currentTheme.text }]}>
        © 2024 Barter Buddy. All rights reserved.
      </Text>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
  },
  headerImage: {
    alignSelf: 'center',
    marginTop: 100,
},
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
});
