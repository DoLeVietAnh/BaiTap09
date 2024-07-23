import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";  // Import StyleSheet
import { AppRegistry } from 'react-native';  // Import AppRegistry

// Import screens
import HomeScreen from "./screens/homeScreen";
import OrderScreen from "./screens/cartScreen";
import InboxScreen from "./screens/inboxScreen";
import ProfileScreen from "./screens/profileScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;

          switch (route.name) {
            case "Home":
              iconPath = focused
                ? require("./assets/home-focused.png")
                : require("./assets/home.png");
              break;
            case "Order":
              iconPath = focused
                ? require("./assets/order.png")
                : require("./assets/order.png");
              break;
            case "Inbox":
              iconPath = focused
                ? require("./assets/inbox.png")
                : require("./assets/inbox.png");
              break;
            case "Profile":
              iconPath = focused
                ? require("./assets/profile.png")
                : require("./assets/profile.png");
              break;
          }

          return (
            <Image
              source={iconPath}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar, 
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,  // Increase the height as needed
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// Register the main component
AppRegistry.registerComponent('main', () => App);
