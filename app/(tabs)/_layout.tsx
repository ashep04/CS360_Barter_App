
import { Stack, Tabs } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import React from 'react';
import { useState } from "react";

export default function SharedTabsLayout() {
  const { isLoggedIn, role } = useAuth();
  console.log("isLoggedIn:", isLoggedIn); // Debugging line
  console.log("role:", role); // Debugging line
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('shared'); // Track the active tab

  // return (
  //   <Tabs
  //     screenListeners={{
  //       state: (e) => {
  //         // Update activeTab based on navigation state
  //         const routeName = e.data.state.routes[e.data.state.index].name;
  //         setActiveTab(routeName);
  //       },
  //     }}
  //     screenOptions={{
  //       tabBarStyle: { display: 'none' }, // Default: Hide tab bar
  //       headerShown: false,
  //     }}
  //   >
  //     {/* Always show shared tab */}
  //     <Tabs.Screen
  //       name="shared"
  //       options={{
  //         title: 'Shared',
  //         tabBarStyle: undefined, // Show the tab bar
  //       }}
  //     />

  //     {/* Show buy tab only if buy or shared is active */}
  //     {(activeTab === 'shared' || activeTab === 'buy') && (
  //       <Tabs.Screen
  //         name="buy"
  //         options={{
  //           title: 'Buy',
  //           tabBarStyle: undefined, // Show the tab bar
  //         }}
  //       />
  //     )}
  //   </Tabs>
  // );
  // if (isLoggedIn) {
  //     return (
  //       <Tabs
  //       screenOptions={{
  //         headerShown: false, // Hides headers for all screens
  //       }}>
  //           <Tabs.Screen
  //             name="shared"
  //             options={{ title: 'Shared', tabBarStyle: { display: 'none' } }}
  //           />
  //           {role === 'BarterBuy' && (
  //             <Tabs.Screen
  //               name="buy"
  //               options={{ title: 'Buy', tabBarStyle: { display: 'none' } }} // Tab bar is shown here
  //             />
  //           )}
  //           {role === 'BarterSell' && (
  //             <Tabs.Screen
  //               name="sell"
  //               options={{ title: 'Sell', tabBarStyle: { display: 'none' } }} // Tab bar is shown here
  //             />
  //           )}

  //     </Tabs>
  //   );
  // } 
   if (isLoggedIn)
  {
      return (
        <Tabs
        screenOptions={{
          tabBarStyle: { display: 'none' },
          headerShown: false, // Hides headers for all screens
        }}>
            <Tabs.Screen
              name="shared"
              options={{ 
                title: 'Shared', 
                //tabBarStyle: { display: undefined } 
              }}
            />
            <Tabs.Screen
              name="buy"
              options={{ 
                title: 'Buy', 
                //tabBarStyle: { display: undefined } 
              }} // Tab bar is shown here
            />
            <Tabs.Screen
            name="sell"
            options={{
              title: 'Sell',
            }}
            />
            <Tabs.Screen
            name="admin"
            options={{
              title: 'Admin',
            }}
            />
            
      </Tabs>
    );
  }
  // else if (isLoggedIn && role === 'BarterSell') {
  //   return (
  //     <Tabs
  //     screenOptions={{
  //       tabBarStyle: { display: 'none' },
  //       headerShown: false, // Hides headers for all screens
  //     }}>
  //         <Tabs.Screen
  //           name="shared"
  //           options={{ 
  //             title: 'Shared', 
  //             //tabBarStyle: { display: undefined } 
  //           }}
  //         />
  //         <Tabs.Screen
  //           name="buy"
  //           options={{ 
  //             title: 'Buy',  
  //           }} // Tab bar is shown here
  //         />

  //         <Tabs.Screen
  //         name="sell"
  //         options={{
  //           title: 'Sell',
  //           //tabBarStyle: { display: undefined },
  //         }}
  //         />
  //         <Tabs.Screen
  //         name="admin"
  //         options={{
  //           title: 'Admin',
  //         }}
  //         />
          
  //   </Tabs>
  // );
  // }
  // else if (isLoggedIn && role === 'admin') {
  //   return (
  //     <Tabs
  //     screenOptions={{
  //       tabBarStyle: { display: 'none' },
  //       headerShown: false, // Hides headers for all screens
  //     }}>
  //         <Tabs.Screen
  //           name="shared"
  //           options={{ 
  //             title: 'Shared', 
  //             //tabBarStyle: { display: undefined } 
  //           }}
  //         />
  //         <Tabs.Screen
  //           name="buy"
  //           options={{ 
  //             title: 'Buy',  
  //           }} // Tab bar is shown here
  //         />

  //         <Tabs.Screen
  //         name="sell"
  //         options={{
  //           title: 'Sell',
  //           //tabBarStyle: { display: undefined },
  //         }}
  //         />
  //         <Tabs.Screen
  //         name="admin"
  //         options={{
  //           title: 'Admin',
  //         }}
  //         />
          
  //   </Tabs>
  // );
  // }



  // return (
  //   <Tabs screenOptions={{ headerShown: false }}>
  //   {!isLoggedIn ? (
  //     <>
  //       <Tabs.Screen name="index" options={{ title: 'Login' }} />
  //     </>
  //   ) : (
  //     <>
  //       <Tabs screenOptions={{ headerShown: false }}>
  //         <Tabs.Screen name="shared" options={{ headerShown: false }} />
          
  //         {role === 'BarterBuy' && (
  //           <Tabs.Screen name="buy" options={{ headerShown: false }} />
  //         )}

  //         {role === 'BarterSell' && (
  //           <Tabs.Screen name="sell" options={{ headerShown: false }} />
  //         )}
  //       </Tabs>
  //     </>
  //   )}
  // </Tabs>
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

