import { colors } from "@/utils/constants";
import { Image } from "expo-image";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: "#222822",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/icons/tab-icons/home-active.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={require("../../assets/icons/tab-icons/home-inactive.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="ticket"
        options={{
          title: "Ticket",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/icons/tab-icons/home-active.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={require("../../assets/icons/tab-icons/ticket-inactive.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/icons/tab-icons/home-active.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={require("../../assets/icons/tab-icons/search-inactive.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/icons/tab-icons/person-active.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ) : (
              <Image
                source={require("../../assets/icons/tab-icons/person-inactive.png")}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            ),
        }}
      />
      <Tabs.Screen
        name="see-all"
        options={{
          href: null,
          title: "All Movies",
        }}
      />
    </Tabs>
  );
}
