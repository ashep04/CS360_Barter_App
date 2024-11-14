import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const AccessPartnership = () => {
  const [userId, setUserId] = useState('');
  const [partnerId, setPartnerId] = useState('');
  const [partnershipStatus, setPartnershipStatus] = useState('');

  const handleDeletePartnership = async () => {
    if (!userId || !partnerId) {
      Alert.alert('Error', 'Both User ID and Partner ID are required');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/deletePartnership', {
        params: { id: userId, partner_id: partnerId },
      });
      Alert.alert('Success', 'Partnership deleted successfully');
      setPartnershipStatus('');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete partnership');
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
      <Button title="Delete Partnership" onPress={handleDeletePartnership} />
      {partnershipStatus && <Text>Status: {partnershipStatus}</Text>}
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

export default AccessPartnership;
