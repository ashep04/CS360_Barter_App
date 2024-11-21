import { Stack, Tabs } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import React from 'react';
import { useRouter } from "expo-router";

export default function RootLayout() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent/>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { isLoggedIn, role } = useAuth();
  console.log("isLoggedIn:", isLoggedIn); // Debugging line
  console.log("role:", role); // Debugging line
  const router = useRouter();

    return (

    <Stack>
      <Stack.Screen
          name="(tabs)"
          options={{
              headerShown: false
          }}
      />
      <Stack.Screen name="index" options={{ title: 'Login', headerShown: false}} />
      <Stack.Screen name="signup" options={{ title: 'Signup' , headerShown: false}} />
    </Stack>

      // <Stack screenOptions={{ headerShown: false }}>
      //   {!isLoggedIn ? (
      //     <>
      //       {/* Stack based navigation for login */}
      //       <Stack.Screen name="home" options={{ title: 'Login' }} />
      //       {/* <Stack.Screen name="signup" options={{ title: 'Sign Up' }} /> */}
      //     </>
      //   ) : (
      //     <>
      //       {/* Once logged in, switch to Tabs navigation */}
      //       <Tabs screenOptions={{ headerShown: false }}>
      //         {/* Show shared tabs */}
      //         <Tabs.Screen name="(sharedTabs)" options={{ headerShown: false }} />
              
      //         {/* Role-specific tabs */}
      //         {role === 'BarterBuy' && (
      //           <Tabs.Screen name="(buyTabs)" options={{ headerShown: false }} />
      //         )}
  
      //         {role === 'BarterSell' && (
      //           <Tabs.Screen name="(sellTabs)" options={{ headerShown: false }} />
      //         )}
      //       </Tabs>
      //     </>
      //   )}
      // </Stack>



    // <Stack screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="(startTabs)" />
    //   <Stack.Screen name="(sharedTabs)" />
    //   <Stack.Screen name="(buyTabs)" />
    //   <Stack.Screen name="(sellTabs)" />
    // </Stack>
    );
}
  // return (
  //   <Stack screenOptions={{ headerShown: false }}>

  //     {/* Show login screen if not logged in */}
  //     {!isLoggedIn && (
  //       <Stack.Screen name="login" />
  //     )}

  //     {/* Show tabs based on the role if logged in */}
  //     {isLoggedIn && role === 'BarterBuy' && (
  //       <Tabs.Screen name="(buyTabs)" options={{ headerShown: false }} />
  //     )}
      
  //     {isLoggedIn && role === 'BarterSell' && (
  //       <Tabs.Screen name="(sellTabs)" options={{ headerShown: false }} />
  //     )}

  //     {/* Optionally, if you have a shared set of tabs for logged-in users */}
  //     {isLoggedIn && role !== 'BarterBuy' && role !== 'BarterSell' && (
  //       <Tabs.Screen name="(sharedTabs)" options={{ headerShown: false }} />
  //     )}
      
  //     {/* Optionally, handle other screens */}
  //     {/* <Stack.Screen name="signup" /> */}
  //   </Stack>
  // );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
  },
  footer: {
    //backgroundColor: '#2F242C',
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
});
