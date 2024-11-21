// app/(buyTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";
import { AuthProvider, useAuth } from '@/components/AuthContext';
import { useRouter } from "expo-router";
import { Text,View } from "react-native";

export default function BuyTabsLayout() {
  const { isLoggedIn, role } = useAuth();

  const router = useRouter();
  
  if (isLoggedIn && (role === 'BarterBuy' || role === 'admin')) {
    return (
      <Tabs
      screenOptions={{
        tabBarStyle: { display: 'none' }, // Hides the tab bar
      }}
      >
        <Tabs.Screen
            name="index"
            options={{ title: "Buy", headerShown: false }}
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
  //   <Tabs>

    // <Tabs.Screen
    //     name="index"
    //     options={{ title: "Home", headerShown: false }}
    //   />
  //   </Tabs>
    
  // );
}
