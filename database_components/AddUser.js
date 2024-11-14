import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

const AddUser = () => {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {currentTheme, toggleTheme} = useTheme();

  const handleAddUser = async () => {
    if (!userId || !username || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://172.29.219.41:3000/addUser', {
        id: userId,
        username: username,
        password: password,
      });

      Alert.alert('Success', 'User added successfully');
      // Reset form fields
      setUserId('');
      setUsername('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add user');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter User ID"
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
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});

export default AddUser;
