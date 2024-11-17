import { Stack, Tabs } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import React from 'react';

export default function RootLayout() {

  return (
    <ThemeProvider>
          <AuthProvider>
            {/* <Stack>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack> */}
            <AppContent/>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { isLoggedIn, role } = useAuth();
  //const {isLoggedIn} = false;
    console.log("isLoggedIn:", isLoggedIn); // Debugging line
    console.log("role:", role); // Debugging line

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Show login screen if not logged in */}
      {!isLoggedIn ? (
        <Tabs.Screen name="login" />
      ) : (
        <>
          <Tabs.Screen name="(sharedTabs)" options={{ headerShown: false }} />
          {/* Show tabs based on the role if logged in */}
          { role === 'BarterBuy' && (
            <>
            <Tabs.Screen name="(buyTabs)" options={{ headerShown: false }} />
            </>
          )}

          { role === 'BarterSell' && (
            <>
            <Tabs.Screen name="(sellTabs)" options={{ headerShown: false }} />
            </>
          )}
        </>
      )}
    </Stack>
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
