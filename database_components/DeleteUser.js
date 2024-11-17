import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const {currentTheme, toggleTheme} = useTheme();

  const handleDeleteUser = async () => {
    if (!userId) {
      Alert.alert('Error', 'User ID is required');
      return;
    }

    try {
      const response = await axiosInstance.post('/deleteUser', { id: userId });
      Alert.alert('Success', 'User deleted successfully');
      setUserId('');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
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
      <Button title="Delete User" onPress={handleDeleteUser} />
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

export default DeleteUser;
