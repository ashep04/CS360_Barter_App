import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  View,
  TextInput,
  Button,
  Text,
  Alert
} from 'react-native';

export default function TabTwoScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('barterbuy'); // Default account type

  const handleSignup = () => {
    // Placeholder signup logic
    if (username === '') {
      Alert.alert('Signup failed', 'Missing username');
    } else if (email === '') {
      Alert.alert('Signup failed', 'Missing email');
    } else if (password === '') {
      Alert.alert('Signup failed', 'Missing password');
    } else if (!accountType) {
      Alert.alert('Signup failed', 'Please select an account type');
    } else {
      Alert.alert('Signup successful', `Account type: ${accountType}`);
    }
  };

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Signup Page</ThemedText>
      </ThemedView>

      <View style={styles.signupContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Toggle buttons for selecting account type */}
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
              Barter Buy
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
              Barter Sell
            </Text>
          </TouchableOpacity>
        </View>

        <Button title="Signup" onPress={handleSignup} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
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
  input: {
    height: 40,
    borderColor: 'gray',
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
    backgroundColor: '#007AFF',
  },
  toggleButtonText: {
    color: '#000',
  },
  activeButtonText: {
    color: '#fff',
  },
});
