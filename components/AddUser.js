// Import necessary modules
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const AddUser = () => {
  // Declare state variables to hold user input
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle adding a user
  const handleAddUser = async () => {
    try {
      const response = await axios.post('http://172.29.219.41:3000/addUser', {
        id: userId,
        username: username,
        password: password,
      });

      // Success: Show a success message
      Alert.alert('Success', 'User added successfully');
    } catch (error) {
      // Error: Show an error message
      console.error(error);
      Alert.alert('Error', 'Failed to add user');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Add User" onPress={handleAddUser} />
    </View>
  );
};

// Basic styles
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
