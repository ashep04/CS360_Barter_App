
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import React from 'react';
import { View, Text } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Icon Library

export default function SharedTabsLayout() {
  const { isLoggedIn, role } = useAuth();
  const {currentTheme, toggleTheme} = useTheme();

  const router = useRouter();
  const FallbackScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Access Denied or Not Logged In</Text>
      </View>
    );
  };

  if (isLoggedIn) {
    return (
      <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'},
        headerStyle: {
          backgroundColor: currentTheme.background, // Dynamic theme color
        },
        headerTintColor: currentTheme.text, // Text color for header
        tabBarStyle: {
          backgroundColor: currentTheme.background, // Background of tab bar
        },
        tabBarActiveTintColor: currentTheme.tabIconSelected, // Active tab color
        tabBarInactiveTintColor: currentTheme.tabIconDefault, // Inactive tab color
      }}
      >
      <Tabs.Screen name="index" options={{ title: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" size={size} color={color} />
      ),
       }} />
      <Tabs.Screen name="settings" options={{ title: 'Dashboard',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="apps-outline" size={size} color={color} />
      ),
       }} />
      <Tabs.Screen name="buy" options={{ title: 'Buy',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="bag-outline" size={size} color={color} />
      ),
       }} />
      <Tabs.Screen name="sell" options={{ title: 'Sell', 
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cash-outline" size={size} color={color} />
      ),
      }} />
      <Tabs.Screen name="admin" options={{ title: 'Admin', 
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
      }} />

      {/* {role !== 'BarterSell' && (
        <Tabs.Screen
          name="sell"
          options={{
            title: 'Sell',
          }}
        />
      )} */}
    </Tabs>
    );
  }
  // else if (isLoggedIn && role === 'BarterSell')
  // {
  //   return (
  //     <Tabs
  //     screenOptions={{
  //       //tabBarStyle: { display: 'none' }, // Hides the tab bar
  //       headerShown: false, // Disable headers globally for the tabs
  //     }}
  //     >
  //     <Tabs.Screen name="index" options={{ title: 'Home' }} />
  //     <Tabs.Screen name="settings" options={{ title: 'Dashboard' }} />
  //     <Tabs.Screen name="buy" options={{ title: 'Buy' }} />
  //     <Tabs.Screen name="sell" options={{ title: 'Sell', }} />
  //     <Tabs.Screen name="admin" options={{ title: 'Admin', }} />

  //   </Tabs>
  //   );
  // }
  // else if (isLoggedIn && role === 'admin')
  //   {
  //     return (
  //       <Tabs
  //       screenOptions={{
  //         //tabBarStyle: { display: 'none' }, // Hides the tab bar
  //         headerShown: false, // Disable headers globally for the tabs
  //       }}
  //       >
  //     <Tabs.Screen name="index" options={{ title: 'Home' }} />
  //     <Tabs.Screen name="settings" options={{ title: 'Dashboard' }} />
  //     <Tabs.Screen name="buy" options={{ title: 'Buy' }} />
  //     <Tabs.Screen name="sell" options={{ title: 'Sell', }} />
  //     <Tabs.Screen name="admin" options={{ title: 'Admin', }} />
  //     </Tabs>
  //     );
  //   }

    return <FallbackScreen/>;



  
  // return (
    // <Tabs
    //   screenOptions={{
    //     headerShown: false, // Disable headers globally for the tabs
    //   }}
    // >
    //   <Tabs.Screen name="index" options={{ title: 'Home' }} />
    //   <Tabs.Screen name="testdb" options={{ title: 'Test DB' }} />
    //   <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      
    // </Tabs>
  // );
};
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

