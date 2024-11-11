import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Platform } from 'react-native';
import axiosInstance from '../api/apiConfig'; // Import the Axios configuration
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import AddUser from '../../components/AddUser'; // Import the AddUser component
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/'); // Use Axios instance
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#DBE4EE', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.Logo}
          />
        }
      >
        <AddUser /> {/* Render the AddUser component */}
        <View style={styles.contentWrapper}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Collapsible title="Database">
              <ThemedView style={styles.stepContainer}>
                {/* <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                /> */}
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()} // Assuming 'id' is unique
                  renderItem={({ item }) => (
                    <Text style={styles.item}>{item.id}</Text> // Adjust based on actual data
                  )}
                />
              </ThemedView>
            </Collapsible>
          </ScrollView>
        </View>
      </ParallaxScrollView>

      <View style={styles.footer}>
        <ThemedText style={styles.baseText}>
          © 2024 Barter Buddy. All rights reserved.
        </ThemedText>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
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
    //alignItems: 'center',
    //padding: 20,
  },
  item: {
    fontSize: 16,
    marginVertical: 5,
  },
  contentWrapper: {
    gap: 4,
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#DBE4EE',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    gap: 8,
    marginBottom: 8,
  },
  footer: {
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
