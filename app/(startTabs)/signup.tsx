// app/login.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import SignupUser from "@/database_components/Signup";
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const {currentTheme, toggleTheme} = useTheme();

  // const handleLogin = (role) => {
  //   login(role); // Save role in AuthContext
  //   if (role === "BarterBuy") router.replace("(buyTabs)/BarterBuy");
  //   if (role === "BarterSell") router.replace("(sellTabs)/BarterSell");
  // };

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: currentTheme.background, dark: currentTheme.background }}
        headerImage={
        <Image
          source={require('@/assets/images/BB-Logo-Long.png')}
          style={styles.headerImage}
        />
      }
    >
            <ThemedView style={[styles.titleContainer, { backgroundColor: currentTheme.background }]}>
    <ThemedText type="title">Signup</ThemedText>
    </ThemedView>
    
    <SignupUser/>
    
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
      justifyContent: 'center',
      paddingTop: 20,
    },
    signupContainer: {
      padding: 20,
    },
    errorText: {
      color: 'red',
      bottom: 18,
      fontSize: 12,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      backgroundColor: '#fff',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    toggleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    toggleButton: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeButton: {
      backgroundColor: '#577399',
    },
    toggleButtonText: {
      color: '#000',
    },
    activeButtonText: {
      color: '#fff',
    },
    signupButton: {
      backgroundColor: '#577399',
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    signupButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    navigation: {
      alignSelf: 'center',
      paddingTop: 20,
    },
    footer: {
      //backgroundColor: '#2F242C',
      gap: 4,
      marginBottom: 2,
      justifyContent: 'flex-end',
    },
    baseText: {
  
    },
  });