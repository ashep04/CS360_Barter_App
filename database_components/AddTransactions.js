import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration

const AddTransaction = () => {
  const [exchangeId, setExchangeId] = useState('');
  const [hashCode, setHashCode] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const {currentTheme, toggleTheme} = useTheme();

  const handleAddTransaction = async () => {
    if (!exchangeId || !hashCode) {
      Alert.alert('Error', 'Exchange ID and Hash Code are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/addTransaction', {
        exchange_id: exchangeId,
        hash_code: hashCode,
      });

      setResponseMessage('Transaction added successfully');
      setExchangeId('');
      setHashCode('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add transaction');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Exchange ID"
        keyboardType="numeric"
        value={exchangeId}
        onChangeText={setExchangeId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Hash Code"
        value={hashCode}
        onChangeText={setHashCode}
      />

      <Button title="Add Transaction" onPress={handleAddTransaction} />

      {responseMessage ? <Text style={styles.responseMessage}>{responseMessage}</Text> : null}
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
  responseMessage: {
    marginTop: 15,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default AddTransaction;
