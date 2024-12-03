import { Stack, Tabs } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook
import { AuthProvider, useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
// import { RefreshProvider } from '@/components/RefreshContext';


import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext(true);

export default function RootLayout() {

  return (
    // <RefreshProvider>
    <ThemeProvider>
      <AuthProvider>
        <AppContent/>
      </AuthProvider>
    </ThemeProvider>
    // </RefreshProvider>
  );
}

function AppContent() {
  const { isLoggedIn, role, username, userId, password } = useAuth();
  console.log("isLoggedIn:", isLoggedIn); // Debugging line
  console.log("role:", role); // Debugging line
  console.log("username: ", username);
  console.log("userId: ", userId);
  console.log("password: ", password);

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

    );
}
 

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
