import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [accountType, setAccountType] = useState('barterbuy'); // Default account type

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Error state variables
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  // Reset input and error when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      // Clear all fields and error messages when the screen is focused
      setUsername('');
      setEmail('');
      setPassword('');
      setPassword2('');

      setUsernameError('');
      setEmailError('');
      setPasswordError('');
      setPassword2Error('');
    }, []) // Empty array ensures it runs only on screen focus
  );


const handleSignup = () => {
    let valid = true;
    // Clear previous error messages
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setPassword2Error('');

    // Validate fields
    if (username === '') {
      setUsernameError('Username is required');
      valid = false;
    }
    if (email === '') {
      setEmailError('Email is required');
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (password === '') {
      setPasswordError('Password is required');
      valid = false;
    } else if (password !== password2) {
      setPassword2Error('Passwords do not match');
      valid = false;
    }

    if (valid) {
      Alert.alert('Signup successful', `Account type: ${accountType}`);
    }
};

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
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
        <ThemedText type="title">Signup</ThemedText>
      </ThemedView>

      <View style={[styles.signupContainer, { backgroundColor: currentTheme.background }]}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={password2}
          onChangeText={setPassword2}
          secureTextEntry
        />
        {password2Error ? <Text style={styles.errorText}>{password2Error}</Text> : null}


        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              accountType === 'barterbuy' && styles.activeButton,
            ]}
            onPress={() => handleAccountTypeChange('barterbuy')}
          >
            <Text
              style={[
                styles.toggleButtonText,
                accountType === 'barterbuy' && styles.activeButtonText,
              ]}
            >
              Barter Buy Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              accountType === 'bartersell' && styles.activeButton,
            ]}
            onPress={() => handleAccountTypeChange('bartersell')}
          >
            <Text
              style={[
                styles.toggleButtonText,
                accountType === 'bartersell' && styles.activeButtonText,
              ]}
            >
              Barter Sell Account
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.navigation}>
          Already have an account?{' '}
          <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('LoginPage')}>
            Login Here
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