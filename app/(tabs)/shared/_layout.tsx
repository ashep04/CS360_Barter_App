
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

export default function SharedTabsLayout() {
  const { isLoggedIn, role } = useAuth();

  const router = useRouter();
  const FallbackScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Access Denied or Not Logged In</Text>
      </View>
    );
  };

  if (isLoggedIn && role === 'BarterBuy') {
    return (
      <Tabs
      screenOptions={{
        //tabBarStyle: { display: 'none' }, // Hides the tab bar
        headerShown: false, // Disable headers globally for the tabs
      }}
      >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="testdb" options={{ title: 'Test DB' }} />
      <Tabs.Screen name="settings" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="buy" options={{ title: 'Buy' }} />
      <Tabs.Screen name="sell" options={{ title: 'Sell', }} />
      <Tabs.Screen name="admin" options={{ title: 'Admin', }} />

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
  else if (isLoggedIn && role === 'BarterSell')
  {
    return (
      <Tabs
      screenOptions={{
        //tabBarStyle: { display: 'none' }, // Hides the tab bar
        headerShown: false, // Disable headers globally for the tabs
      }}
      >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="testdb" options={{ title: 'Test DB' }} />
      <Tabs.Screen name="settings" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="buy" options={{ title: 'Buy' }} />
      <Tabs.Screen name="sell" options={{ title: 'Sell', }} />
      <Tabs.Screen name="admin" options={{ title: 'Admin', }} />

    </Tabs>
    );
  }
  else if (isLoggedIn && role === 'admin')
    {
      return (
        <Tabs
        screenOptions={{
          //tabBarStyle: { display: 'none' }, // Hides the tab bar
          headerShown: false, // Disable headers globally for the tabs
        }}
        >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="testdb" options={{ title: 'Test DB' }} />
      <Tabs.Screen name="settings" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="buy" options={{ title: 'Buy' }} />
      <Tabs.Screen name="sell" options={{ title: 'Sell', }} />
      <Tabs.Screen name="admin" options={{ title: 'Admin', }} />
      </Tabs>
      );
    }

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

