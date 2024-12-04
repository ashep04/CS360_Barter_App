import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration
import { useAuth } from '@/components/AuthContext';

const DeletePartnership = () => {
  const [userId2, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnershipStatus, setPartnershipStatus] = useState('');
  const {currentTheme, toggleTheme} = useTheme();
  const { isLoggedIn, role, username, userId, password } = useAuth();
  

  const handleDeletePartnership = async () => {
    if (!partnerId) {
      Alert.alert('Error', 'Partner ID are required');
      return;
    }
    if (role === 'admin')
    {

    }
    else
    {
      setUserId(userId);
    }

    try {
      const response = await axiosInstance.post('/deletePartnership', {
        id: userId2,
        partner_id: partnerId,
        // params: { id: userId, partner_id: partnerId },
      });
      Alert.alert('Success', 'Partnership deleted successfully');
      setPartnershipStatus('');
      setPartnerId('');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete partnership');
    }
  };

  return (
    <View style={styles.container}>
      {role === 'admin' && (
        <TextInput
        style={[styles.input, { color: currentTheme.text }]}
          placeholder="Enter User ID"
          value={userId2}
          onChangeText={setUserId}
        />
      )}
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Partner ID"
        value={partnerId}
        onChangeText={setPartnerId}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleDeletePartnership}>
          <Text style={styles.loginButtonText}>Delete Partner</Text>
      </TouchableOpacity>
      {/* <Button title="Delete Partnership" onPress={handleDeletePartnership} />
      {partnershipStatus && <Text>Status: {partnershipStatus}</Text>} */}
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

export default DeletePartnership;
