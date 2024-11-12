import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
} from 'react-native';

export default function TabTwoScreen() {
  const {currentTheme, toggleTheme} = useTheme();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Error state variables
  const [loginError, setLoginError] = useState('');

  // Reset input and error when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Clear all fields and error messages when the screen is focused
      setUsername('');
      setPassword('');
      setLoginError('');
    }, []) // Empty array ensures it runs only on screen focus
  );

  const handleLogin = () => {
    let valid = true;

    // Clear previous error messages
    setLoginError('');

    // Validate fields
    if (username === '' || password === '') {
      setLoginError('The username or password is incorrect.');
      valid = false;
    }

    if (valid) {
      Alert.alert('Login successful');
    }
  };

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

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.navigation}>
          Not a member?{' '}
          <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('SignupPage')}>
            Signup Here
          </Text>
        </Text>
      </View>
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
