// app/(buyTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function BuyTabsLayout() {
  return (
    <Tabs>

    <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
    </Tabs>
    
  );
}
