import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const AddPartnership = () => {
  const [userId, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('pending');  // Default status is 'pending'


  const handleAddPartnership = async () => {
    if (!userId || !partnerId) {
      Alert.alert('Error', 'Both User ID and Partner ID are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/addPartnership', {
        id: userId,
        partner_id: partnerId,
        status: partnerStatus,
      });

      Alert.alert('Success', 'Partnership added successfully');
      setUserId('');
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
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Partner ID"
        value={partnerId}
        onChangeText={setPartnerId}
      />

      <View style={styles.statusContainer}>
        <Text>Status: {partnerStatus}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={setStatusPending}>
            <Text style={styles.buttonText}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={setStatusAccepted}>
            <Text style={styles.buttonText}>Accepted</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button title="Add Partnership" onPress={handleAddPartnership} />
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
    backgroundColor: '#4CAF50',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddPartnership;
