// app/(sellTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function SellTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
    </Tabs>
  );
}
