import { Stack } from "expo-router";
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import AddUser from '../components/AddUser.js'; // Import the AddUser component
import { ThemeProvider, useTheme } from '@/components/ThemeContext'; // Import the useTheme hook


export default function RootLayout() {

  return (
    <ThemeProvider>
      {/* <View style={[styles.container, { backgroundColor: currentTheme.background }]}> */}
    <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
    </Stack>
    {/* </View> */}
    </ThemeProvider>
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
