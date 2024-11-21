
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemeProvider } from '@react-navigation/native';
import { useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

export default function AdminTabsLayout() {
  const { isLoggedIn, role } = useAuth();

  const router = useRouter();

  if (isLoggedIn && role === 'admin') {
    return (
      <Tabs
      screenOptions={{
        tabBarStyle: { display: 'none' }, // Hides the tab bar
      }}
      >
      <Tabs.Screen
          name="index"
          options={{ title: "Admin", headerShown: false }}
        />
      </Tabs>
    );
  }
  const FallbackScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Access Denied</Text>
      </View>
    );
  };
  return <FallbackScreen/>;
  // return (
  //   <Tabs
  //     screenOptions={{
  //       headerShown: false, // Disable headers globally for the tabs
  //     }}
  //   >
  //     <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
      
  //   </Tabs>
  // );
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

