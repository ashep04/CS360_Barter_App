import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { Colors } from '@/constants/Colors'; // Import your Colors object
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import axiosInstance from '../../../api/apiConfig'; // Import the Axios configuration


import AddPartnership from '@/database_components/AddPartnership'; // Import the AddUser component
import DeletePartnership from '@/database_components/DeletePartnership'; // Import the AddUser component
import DeleteUser from '@/database_components/DeleteUser'; // Import the AddUser component


export default function HomeScreen() {
  
  const [dataAccounts, setDataAccounts] = useState([]);
  const [dataPartners, setDataPartners] = useState([]);
  const [dataTransactions, setDataTransactions] = useState([]);

  const [loading, setLoading] = useState(true);
  // Theme
  const {currentTheme, toggleTheme} = useTheme();

  // Fetch data for users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getAccounts'); // Use Axios instance
        setDataAccounts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch data for partnerships
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getPartnerships'); // Use Axios instance
        setDataPartners(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch data for transactions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/getTransactions'); // Use Axios instance
        setDataTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Sample data for each section
  const accountInfo = [
    { id: '1', label: 'Username', value: 'john_doe' },
    { id: '2', label: 'Email', value: 'john@example.com' },
    { id: '3', label: 'Phone', value: '+1234567890' },
  ];

  const partnerships = [
    { id: '1', name: 'Company A', status: 'Active' },
    { id: '2', name: 'Company B', status: 'Inactive' },
  ];

  const transactions = [
    { id: '1', date: '2024-11-01', amount: '$100', status: 'Completed' },
    { id: '2', date: '2024-11-02', amount: '$50', status: 'Pending' },
  ];

  //TESTT
  const additionalData = [
    { id: '1', title: 'Service A', description: 'Active', status: 'In Progress' },
    { id: '2', title: 'Service B', description: 'Inactive', status: 'Pending' },
    { id: '3', title: 'Service C', description: 'Active', status: 'Completed' },
    { id: '4', title: 'Service D', description: 'Inactive', status: 'On Hold' },
  ];


  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <ParallaxScrollView
        //headerBackgroundColor={{ light: '#1D3D47', dark: '#1D3D47' }}
        headerBackgroundColor={{ light: currentTheme.background, dark: currentTheme.background }}

        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
        }
      >
        <View style={[styles.contentWrapper, { backgroundColor: currentTheme.background }]}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.row }>

              {/* Account Information Column */}
              {/* <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Account Info</Text>
                {accountInfo.map(item => (
                  <View key={item.id} style={styles.item}>
                    <Text style={[styles.itemLabel, { color: currentTheme.text }]}>{item.label}: </Text>
                    <Text style={{ color: currentTheme.text }}>{item.value}</Text>
                  </View>
                ))}
              </View> */}

              {/* Account Information Column */}
              <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Account Info</Text>
                {loading ? (
                  <Text style={{ color: currentTheme.text }}>Loading...</Text>
                ) : (
                  dataAccounts.map((item) => (
                    <View key={item.id} style={styles.item}>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>Username: {item?.username || 'NA'}</Text>
                      {/* <Text style={[styles.itemLabel, { color: currentTheme.text }]}>{item?.username || 'NA'}</Text> */}
                      <Text style={{color: currentTheme.text}}>Password: {item?.password || 'NA'}</Text>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>
                        Type: {item?.role || 'NA'}
                      </Text>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>
                        ID: {item?.id || 'NA'}
                      </Text>
                    </View>
                  ))
                )}
                <DeleteUser/>
              </View>
              </View>
              {/* Partnerships Column */}
              {/* <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Partnerships</Text>
                {partnerships.map(item => (
                  <View key={item.id} style={styles.item}>
                    <Text style={{ color: currentTheme.text }}>{item.name} - {item.status}</Text>
                  </View>
                ))}
              </View> */}
            <View style={styles.row }>

              {/* Partnerships Column */}
              <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Partnerships</Text>
                {loading ? (
                  <Text style={{ color: currentTheme.text }}>Loading...</Text>
                ) : (
                  dataPartners.map((item) => (
                    <View key={item.id} style={styles.item}>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>ID 1: {item?.id || 'NA'}</Text>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>ID 2: {item?.partner_id || 'NA'}</Text>
                    </View>
                  ))
                )}
              <AddPartnership />
              <DeletePartnership/>
              </View>
            </View>

            <View style={styles.row }>
              
              {/* Transactions Column */}
              {/* <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Transactions</Text>
                {transactions.map(item => (
                  <View key={item.id} style={styles.item}>
                    <Text style={{ color: currentTheme.text }}>{item.date} - {item.amount} - {item.status}</Text>
                  </View>
                ))}
              </View> */}
              
              {/* Transactions Column */}
              {/* <View style={[styles.column, { backgroundColor: currentTheme.background }]}>
                <Text style={[styles.titleText, { color: currentTheme.text }]}>Transactions</Text>
                {loading ? (
                  <Text style={{ color: currentTheme.text }}>Loading...</Text>
                ) : (
                  dataTransactions.map((item) => (
                    <View key = {item.exchange_id} style={styles.item}>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>EID: {item?.exchange_id || 'NA'}</Text>
                      <Text style={[styles.itemLabel, { color: currentTheme.text }]}>Time: {item?.hash_code || 'NA'}</Text>

                    </View>
                  ))
                )}
              </View> */}

            </View>
          </ScrollView>
        </View>
      </ParallaxScrollView>


      <View style={[styles.footer, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.baseText, { color: currentTheme.text }]}>
          © 2024 Barter Buddy. All rights reserved.
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#DBE4EE',
  },
  headerImage: {
    alignSelf: 'center',
    marginTop: 100,
  },
  button: {
    // backgroundColor: 'transparent',
    // paddingVertical: 8,
    // marginBottom: 10,
    // alignItems: 'center',
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#DBE4EE',
  },
  Logo: {
    height: 130,
    width: 350,
    marginTop: 100,
    alignSelf: 'center',
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    gap: 4,
    marginBottom: 8,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    gap: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  item: {
    marginBottom: 8,
  },
  itemLabel: {
    //color: '#DBE4EE',
    // fontWeight: 'bold',
  },
  itemText: {
    //color: '#DBE4EE',
    // fontSize: 16,
    // color: '#333',
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
  titleText: {
    //color: '#DBE4EE',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
