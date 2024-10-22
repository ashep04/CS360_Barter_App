

// export default function HomeScreen() {
//   return (

    
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>

//         {/* <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText> */}
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

// Expo/react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Image, Platform } from 'react-native';
import { Tabs } from 'expo-router';

// Components
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';


export default function HomeScreen() {

  return (
    <View style={styles.container}>
       <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Barter Buddy!</ThemedText>
       </ThemedView>

       <Collapsible title="Use Information">
       <ThemedView style={styles.stepContainer}>
         <ThemedText>
          When you register you will pick either BarterBuy or BarterSell. Whichever one you choose, you will have a partner that has access to the other platform. 
         </ThemedText>
         <ThemedText>
          BarterBuy allows you to view and buy from the bulletin board using goods.
         </ThemedText>
        <ThemedText>
          BarterSell allows you to post an item to the bulletin board to sell for other goods.
        </ThemedText>
       </ThemedView>
       </Collapsible>

       <Collapsible title="Terms and Conditions">
       <ThemedView style={styles.stepContainer}>
         <ThemedText>
          Using this product, you agree that you will not hold Barter Buddy liable for any scams or trickery.
         </ThemedText>
         <ThemedText>
         </ThemedText>
        <ThemedText>
        </ThemedText>
       </ThemedView>
       </Collapsible>

       <Collapsible title="FAQ">
       <ThemedView style={styles.stepContainer}>
         <ThemedText>
          Can I buy an item if I signed up for BarterSell? You can only buy an item through your partner, and vice versa for selling.
         </ThemedText>
         <ThemedText>
         </ThemedText>
        <ThemedText>
        </ThemedText>
       </ThemedView>
       </Collapsible>


      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});