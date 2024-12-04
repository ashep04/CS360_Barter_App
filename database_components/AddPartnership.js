import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration
import { setRefreshFlag } from '@/utils/refresh';
import { useAuth } from '@/components/AuthContext';
import { getRefreshFlag, clearRefreshFlag } from '@/utils/refresh';

const AddPartnership = () => {
  const { isLoggedIn, role, username, userId, password } = useAuth();
  const [userId2, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('pending');  // Default status is 'pending'
  const {currentTheme, toggleTheme} = useTheme();


  const handleAddPartnership = async () => {
    setPartnerStatus('accepted');
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
      const response = await axiosInstance.post('/addPartnership', {
        id: userId2,
        partner_id: partnerId,
        status: partnerStatus,
      });
      await setRefreshFlag(true); // Set refresh flag
      Alert.alert('Success', 'Partnership added successfully');
      // setUserId('');
      setPartnerId('');
      
    } catch (error) {
      Alert.alert('Error', 'Failed to add partnership');
    }
  };

  // Function to change the partnership status to 'pending'
  const setStatusPending = () => {
    setPartnerStatus('pending');
  };

  // Function to change the partnership status to 'accepted'
  const setStatusAccepted = () => {
    setPartnerStatus('accepted');
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      /> */}

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


      <TouchableOpacity style={styles.loginButton} onPress={handleAddPartnership}>
          <Text style={styles.loginButtonText}>Add Partner</Text>
        </TouchableOpacity>
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
  statusContainer: {
    //marginVertical: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //marginVertical: 10,
  },
  button: {
    backgroundColor: '#577399',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    //color: 'white',
    fontSize: 16,
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

export default AddPartnership;
