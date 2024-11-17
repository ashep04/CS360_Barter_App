// app/(buyTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function BuyTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="BarterBuy"
        options={{ title: "Buy", headerShown: false }}
      />
            <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
    <Tabs.Screen name="(sharedTabs)" options={{ headerShown: false }} />

    </Tabs>
    
  );
}
