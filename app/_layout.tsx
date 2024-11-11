import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from 'react-native';
import AddUser from '../components/AddUser.js'; // Import the AddUser component


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <AddUser /> {/* Render the AddUser component */}
      </SafeAreaView>
    </Stack>

  );
}
