
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook

import React from 'react';
import { Tabs } from 'expo-router';

export default function SharedTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Disable headers globally for the tabs
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="testdb" options={{ title: 'Test DB' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      
    </Tabs>
  );
}
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//             <Tabs.Screen
//         name="BarterBuy"
//         options={{
//           title: 'BarterBuy',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />
//             <Tabs.Screen
//         name="BarterSell"
//         options={{
//           title: 'BarterSell',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="LoginPage"
//         options={{
//           title: 'Login Page',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="SignupPage"
//         options={{
//           title: 'Signup Page',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//             <Tabs.Screen
//         name="testdb"
//         options={{
//           title: 'Test DB',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
//         <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Settings',
//           tabBarIcon: ({ color, focused }) => (
//             <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
//           ),
//         }}
//       />
      
//     </Tabs>
//   );
