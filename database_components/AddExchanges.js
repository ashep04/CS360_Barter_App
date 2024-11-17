import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../app/api/apiConfig'; // Import the Axios configuration

const AddExchanges = () => {
  const [sellerId, setSellerId] = useState('');
  const [buyerId, setBuyerId] = useState('');
  const [sellerPartnerId, setSellerPartnerId] = useState('');
  const [buyerPartnerId, setBuyerPartnerId] = useState('');
  const [commodityId, setCommodityId] = useState('');
  const [offerCommodityId, setOfferCommodityId] = useState('');
  const [commodityValue, setCommodityValue] = useState('');
  const [hashCode, setHashCode] = useState('');
  const [status, setStatus] = useState('pending');  // Default status is 'pending'
  const {currentTheme, toggleTheme} = useTheme();

  const handleAddExchange = async () => {
    if (!sellerId || !buyerId || !commodityId || !offerCommodityId || !commodityValue || !hashCode) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      const response = await axiosInstance.post('/addExchange', {
        seller_id: sellerId,
        buyer_id: buyerId,
        seller_partner_id: sellerPartnerId || null,
        buyer_partner_id: buyerPartnerId || null,
        commodity_id: commodityId,
        offer_commodity_id: offerCommodityId,
        commodity_value: commodityValue,
        hash_code: hashCode,
        status: status,
      });

      Alert.alert('Success', 'Exchange added successfully');
      // Clear form fields after successful addition
      setSellerId('');
      setBuyerId('');
      setSellerPartnerId('');
      setBuyerPartnerId('');
      setCommodityId('');
      setOfferCommodityId('');
      setCommodityValue('');
      setHashCode('');
      setStatus('pending');
    } catch (error) {
      Alert.alert('Error', 'Failed to add exchange');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Seller ID"
        value={sellerId}
        onChangeText={setSellerId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Buyer ID"
        value={buyerId}
        onChangeText={setBuyerId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Seller Partner ID (Optional)"
        value={sellerPartnerId}
        onChangeText={setSellerPartnerId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Buyer Partner ID (Optional)"
        value={buyerPartnerId}
        onChangeText={setBuyerPartnerId}
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Commodity ID"
        value={commodityId}
        onChangeText={setCommodityId}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Offer Commodity ID"
        value={offerCommodityId}
        onChangeText={setOfferCommodityId}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Commodity Value"
        value={commodityValue}
        onChangeText={setCommodityValue}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { color: currentTheme.text }]}
        placeholder="Enter Hash Code"
        value={hashCode}
        onChangeText={setHashCode}
      />
      {/* Optional: Dropdown for selecting status */}
      <Button title="Add Exchange" onPress={handleAddExchange} />
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

export default AddExchanges;
