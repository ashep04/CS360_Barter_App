// app/login.tsx
import React from 'react';
import {Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import LoginUser from "@/database_components/Login";
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Login() {
  const {currentTheme, toggleTheme} = useTheme();
  const navigation = useNavigation();

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
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>

      <LoginUser/>

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
    loginContainer: {
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
    loginButton: {
      backgroundColor: '#577399',
      paddingVertical: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    loginButtonText: {
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
    baseText: {},
  });
  