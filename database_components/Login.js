import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration

import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import {
  Text,
} from 'react-native';

import { useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";

const LoginUser = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {currentTheme, toggleTheme} = useTheme();
  const { logout, login, setRole, setIsLoggedIn} = useAuth();
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const router = useRouter();

  // Fetch data for users
  const [dataAccounts, setDataAccounts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getAccounts'); // Use Axios instance
        setDataAccounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // const handleLogin = (role) => {
  //   login(role); // Save role in AuthContext
  //   if (role === "BarterBuy") router.replace("(buyTabs)/BarterBuy");
  //   if (role === "BarterSell") router.replace("(sellTabs)/BarterSell");
  // };
  
  const handleLogout = async () => 
    {
      logout();
      // navigation.navigate('index');
    }

  const handleLogin = async () => {
    setLoginError('');
    if (!userId || !username || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    const account = dataAccounts.find(
        (acc) => (acc.id === userId || acc.username === username) && acc.password === password
      );
  
      if (account) {
        //setRole(account.role);
        //setIsLoggedIn(true);
        login(account.role);
        setLoginError('Login successful!');
        Alert.alert('Success', 'Login Successful');
        if (account.role == 'BarterBuy')
        {
          //router.push("/(buyTabs)");
            // navigation.reset();
            // navigation.push('BarterBuy');
          navigation.navigate('(Buy)');
            //navigation.replace('BarterBuy');
        }
        else if (account.role == 'BarterSell')
        {            
          navigation.navigate('Sell');
        }

      } else {
        setLoginError('Invalid email/username or password.');
        Alert.alert('Error', 'Failed to login');
      }
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Email"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
          <Text style={styles.loginButtonText}>Temporary Logout</Text>
        </TouchableOpacity>

        <Text style={styles.navigation}>
          Not a member?{' '}
          <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('signup')}>
            Signup
          </Text>
        </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
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

export default LoginUser;
