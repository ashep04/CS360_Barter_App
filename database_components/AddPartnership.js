import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration
import { setRefreshFlag } from '@/utils/refresh';

const AddPartnership = () => {
  const [userId, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('pending');  // Default status is 'pending'
  const {currentTheme, toggleTheme} = useTheme();


  const handleAddPartnership = async () => {
    setPartnerStatus('accepted');
    if (!userId || !partnerId) {
      Alert.alert('Error', 'Both User ID and Partner ID are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/addPartnership', {
        id: userId,
        partner_id: partnerId,
        status: partnerStatus,
      });

      Alert.alert('Success', 'Partnership added successfully');
      setUserId('');
      setPartnerId('');
      setRefreshFlag(true);
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
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Partner ID"
        value={partnerId}
        onChangeText={setPartnerId}
      />

      <View style={styles.statusContainer}>
        {/* <Text
        style={[styles.input, { color: currentTheme.text }]}>
          Status: {partnerStatus}
        </Text> */}
        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity style={styles.button} onPress={setStatusPending}>
            <Text style={[styles.buttonText, {color: currentTheme.text}]}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={setStatusAccepted}>
            <Text style={[styles.buttonText, {color: currentTheme.text}]}>Accepted</Text>
          </TouchableOpacity> */}
        </View>
      </View>

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
