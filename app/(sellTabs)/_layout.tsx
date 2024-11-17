// app/(sellTabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function SellTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="BarterSell"
        options={{ title: "Sell", headerShown: true }}
      />
    </Tabs>
  );
}
