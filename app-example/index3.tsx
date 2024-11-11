
  // return (
    // <View style={styles.container}>
      // <FlatList
      //   data={data}
      //   keyExtractor={(item) => item.id.toString()}
      //   renderItem={({ item }) => (
      //     <Text style={styles.item}>{item.name}</Text>
      //   )}
      // />
    // </View>
  // );


// Expo/react
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import { Image, Platform } from 'react-native';
import axios from 'axios';

// Components
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';


export default function HomeScreen1() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // http://192.168.141.226:3000/users
  useEffect(() => {
    axios
      .get('http://192.168.141.226:3000/') // Replace with your Express backend URL
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style ={styles.container}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DBE4EE', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/BB-Logo-Long.png')}
          style={styles.Logo}
        /> 
      }>



        <View style={styles.contentWrapper}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* <View style={styles.titleContainer}>
          <ThemedText style={styles.titleText}>Barter Buddy!</ThemedText>
        </View> */}

          <Collapsible title="Use Information">
            <ThemedView style={styles.stepContainer}>
              <ThemedText style={styles.baseText}>
                When you register you will pick either BarterBuy or BarterSell.
              </ThemedText>
              <ThemedText>
                You will have a partner that has access to the other platform.
              </ThemedText>
              <ThemedText>
                BarterBuy allows you to view and buy from the bulletin board using goods.
              </ThemedText>
              <ThemedText>
                BarterSell allows you to post an item to the bulletin board to sell for other goods.
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Terms & Conditions">
            <ThemedView style={styles.stepContainer}>
              <ThemedText>
                Using this product, you agree that you will not hold Barter Buddy liable for any scams or trickery.
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="FAQ">
            <ThemedView style={styles.stepContainer}>
              <ThemedText> Can I buy an item if I signed up for BarterSell?</ThemedText>
              <ThemedText>
                You can only buy an item through your partner, and vice versa for selling.
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Database">
            <ThemedView style={styles.stepContainer}>
              <ThemedText>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name}</Text>
                  )}
              />
              </ThemedText>
            </ThemedView>
          </Collapsible>

        </ScrollView>
        </View>

        {/* Footer - pinned to the bottom */}

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
    alignItems: 'center',
    padding: 20,
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
  baseText: {
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

