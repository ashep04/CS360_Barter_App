import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import Ionicons from '@expo/vector-icons/Ionicons';
import CryptoJS from 'crypto-js';
import { StyleSheet, Image, TextInput, Button, View, Text, FlatList } from 'react-native';
import axiosInstance from '../../../api/apiConfig'; // Import the Axios configuration

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

export default function TabTwoScreen() {
  const { currentTheme } = useTheme();

  // State for form inputs
  const [itemForSale, setItemForSale] = useState('');
  const [amountForSale, setAmountForSale] = useState('');
  const [itemWanted, setItemWanted] = useState('');
  const [amountWanted, setAmountWanted] = useState('');
  const [posts, setPosts] = useState([]);


// Function to handle adding a post
const addPost = async () => {
  const amountForSaleNumber = parseInt(amountForSale);
  const amountWantedNumber = parseInt(amountWanted);

  if (itemForSale && amountForSale && itemWanted && amountWanted) {
      const accountResponse = await axiosInstance.get('/getAccounts');
      const accountID = accountResponse.data.id;

    if (!isNaN(amountForSaleNumber) && !isNaN(amountWantedNumber) && amountForSaleNumber > 0 && amountWantedNumber > 0) {
      // Prepare the commodity data for the backend
      const commodityData1 = {
        id: null,
        commodity_name: itemWanted,
        commodity_type: "item",
        quantity: amountWantedNumber,
        value: 1,
      };
      const commodityData2 = {
        id: null,
        commodity_name: itemForSale,
        commodity_type: "item",
        quantity: amountForSaleNumber,
        value: 1,
      };
      const exchangeData = {
          seller_id: accountID,
          buyer_id: null,
          seller_partner_id: null,
          buyer_partner_id: null,
          commodity_id: itemWanted,
          offer_commodity_id: itemForSale,
          commodity_value: (amountWantedNumber / amountForSaleNumber),
          hash_code: CryptoJS.SHA256(itemWanted).toString(CryptoJS.enc.Hex),
          status: 'pending',
      };

      try {
        // Send the commodity data to the backend via POST request
        const response1 = await axiosInstance.post('/addCommodity', commodityData1);
        const response2 = await axiosInstance.post('/addCommodity', commodityData2);
        // response3 = await axiosInstance.post('/addExchange', exchangeData);
        console.log('Commodity added successfully:', response1.data);
        console.log('Commodity added successfully:', response2.data);
        //console.log('Commodity added successfully:', response3.data);

        // Update the state to reflect the new post (optional)
        setPosts([
          ...posts,
          {
            id: accountID,
            itemForSale,
            amountForSale: amountForSaleNumber,
            itemWanted,
            amountWanted: amountWantedNumber,
          },
        ]);

        // Reset the form fields
        setItemForSale('');
        setAmountForSale('');
        setItemWanted('');
        setAmountWanted('');
      } catch (error) {
        console.error('Error adding commodity:', error);
        alert(error);
      }

    } else {
      alert('Please input non-zero positive numbers!');
    }
  } else {
    alert('Please fill in all fields!');
  }
};



  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <ParallaxScrollView
        headerBackgroundColor={currentTheme.background}
        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={[styles.titleContainer, { backgroundColor: currentTheme.background }]}>
          <ThemedText type="title">BarterSell</ThemedText>
        </ThemedView>


      {/* Post Input Form */}
    <View style={[styles.formContainer, { backgroundColor: currentTheme.background }]}>
  <TextInput
    placeholder="Item for sale"
    value={itemForSale}
    onChangeText={setItemForSale}
    style={[styles.input, { color: currentTheme.text, borderColor: currentTheme.text }]}
    placeholderTextColor={currentTheme.text}
  />
  <TextInput
    placeholder="Amount for sale"
    value={amountForSale}
    onChangeText={setAmountForSale}
    style={[styles.input, { color: currentTheme.text, borderColor: currentTheme.text }]}
    placeholderTextColor={currentTheme.text}
    keyboardType="numeric"
  />
  <TextInput
    placeholder="Item wanted"
    value={itemWanted}
    onChangeText={setItemWanted}
    style={[styles.input, { color: currentTheme.text, borderColor: currentTheme.text }]}
    placeholderTextColor={currentTheme.text}
  />
  <TextInput
    placeholder="Amount wanted"
    value={amountWanted}
    onChangeText={setAmountWanted}
    style={[styles.input, { color: currentTheme.text, borderColor: currentTheme.text }]}
    placeholderTextColor={currentTheme.text}
    keyboardType="numeric"
  />
  <Button
    title="Post"
    backgroundColor='#577399'
    onPress={() => addPost()}  // Pass the user id and form values to addPost
  />
</View>


      {/* Display List of Posts */}
      <Text style={[styles.subtitle, { color: currentTheme.text }]}>
        Current Posts
      </Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.postItem, { backgroundColor: currentTheme.background }]}>
            <Text style={[styles.postText, { color: currentTheme.text }]}>
              Selling: {item.itemForSale} ({item.amountForSale})
            </Text>
            <Text style={[styles.postText, { color: currentTheme.text }]}>
              Wanting: {item.itemWanted} ({item.amountWanted})
            </Text>
          </View>
        )}
      />
      </ParallaxScrollView>
      <View style={[styles.footer, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.baseText, { color: currentTheme.text }]}>
          © 2024 Barter Buddy. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    alignSelf: 'center',
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  formContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#fff',
  },
  postItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postText: {
    fontSize: 16,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  baseText: {
    fontSize: 14,
  },
});
