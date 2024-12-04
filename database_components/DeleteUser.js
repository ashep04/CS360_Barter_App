import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration
import { useAuth } from '@/components/AuthContext';

const DeleteUser = () => {
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const { currentTheme } = useTheme();
  const { isLoggedIn, role, username, userId, password } = useAuth();

  const handleDeleteUser = async () => {

    if (role !== 'admin') {
      setUserIdToDelete(userId);
    }

    if (!userIdToDelete) {
      Alert.alert('Error', 'User ID is required');
      return;
    }
    try {
      const response = await axiosInstance.post('/deleteUser', {
        id: userIdToDelete,
      });
      Alert.alert('Success', 'User deleted successfully');
      setStatusMessage('User deleted successfully');
      setUserIdToDelete('');
      if (role !== 'admin')
      {navigation.navigate('')}
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user');
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the User ID input only if the user is an admin */}
      {role === 'admin' && (
        <>
        <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter User ID to delete"
          value={userIdToDelete}
          onChangeText={setUserIdToDelete}
        />
      <TouchableOpacity style={styles.loginButton} onPress={handleDeleteUser}>
        <Text style={styles.loginButtonText}>Delete User</Text>
      </TouchableOpacity>
      {statusMessage && <Text>Status: {statusMessage}</Text>}
        </>
      )}

      {(role === 'BarterBuy' || role === 'BarterSell') && (
        <>
        <TouchableOpacity style={styles.loginButton} onPress={handleDeleteUser}>
        <Text style={styles.loginButtonText}>Delete User</Text>
      </TouchableOpacity>
        {statusMessage && <Text>Status: {statusMessage}</Text>}
      </>
      )}
      
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
});

export default DeleteUser;
