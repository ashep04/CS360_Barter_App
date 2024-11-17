// app/(buyTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function BuyTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="BarterBuy"
        options={{ title: "Buy", headerShown: true }}
      />
    </Tabs>
  );
}
