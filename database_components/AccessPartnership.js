import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const AccessPartnership = () => {
  const [userId, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnershipStatus, setPartnershipStatus] = useState('');

  const handleAccessPartnership = async () => {
    if (!userId || !partnerId) {
      Alert.alert('Error', 'Both User ID and Partner ID are required');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/accessPartnerships', {
        params: { id: userId, partner_id: partnerId },
      });

      // Make sure the response contains the status field
      if (response.data.status && response.data.status !== 'Partnership not found') {
        setPartnershipStatus(response.data.status);
      } else {
        // If partnership not found, set a message
        setPartnershipStatus('Partnership not found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch partnership status');
      console.error(error);
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
        placeholder="Enter Partner ID"
        value={partnerId}
        onChangeText={setPartnerId}
      />
      <Button title="Get Partnership Status" onPress={handleAccessPartnership} />
      
      {partnershipStatus && (
        <Text style={styles.statusText}>Status: {partnershipStatus}</Text>
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
  statusText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccessPartnership;
