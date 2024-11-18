
import { Stack, Tabs } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import React from 'react';
import { useRouter } from "expo-router";

export default function SharedTabsLayout() {
  const { isLoggedIn, role } = useAuth();
  console.log("isLoggedIn:", isLoggedIn); // Debugging line
  console.log("role:", role); // Debugging line
  const router = useRouter();

  return (
    // <Stack
    //   screenOptions={{
    //     headerShown: false, // Disable headers globally for the tabs
    //   }}
    // >
    //   <Stack.Screen name="login" options={{ title: 'Login' }} />
    //   <Stack.Screen name="signup" options={{ title: 'Signup' }} />
    //   {/* <Tabs.Screen name="signup" options={{ title: 'Test DB' }} /> */}
      
    // </Stack>
    <Tabs screenOptions={{ headerShown: false }}>
    {!isLoggedIn ? (
      <>
        <Tabs.Screen name="index" options={{ title: 'Login' }} />
      </>
    ) : (
      <>
        <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen name="Shared" options={{ headerShown: false }} />
          
          {role === 'BarterBuy' && (
            <Tabs.Screen name="Buy" options={{ headerShown: false }} />
          )}

          {role === 'BarterSell' && (
            <Tabs.Screen name="Sell" options={{ headerShown: false }} />
          )}
        </Tabs>
      </>
    )}
  </Tabs>

//     <Tabs>
//     <Tabs.Screen
//         name="buy"
//         options={{
//             headerTitle: "Tab 1",
//             title: "Tab 1 Title"
//         }}
//     />
//     <Tabs.Screen
//         name="sell"
//         options={{
//             headerTitle: "Home Tab",
//             title: "Home Tab Title"
//         }}
//     />
//     <Tabs.Screen
//         name="shared"
//         options={{
//             headerTitle: "Tab 2",
//             title: "Tab 2 Title"
//         }} />
// </Tabs>
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

