import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

const menuItems = [
  { id: "1", icon: require("../assets/pizza.png"), text: "PIZZA" },
  { id: "2", icon: require("../assets/burger.png"), text: "BURGER" },
  { id: "3", icon: require("../assets/drinks.png"), text: "DRINKS" },
  { id: "4", icon: require("../assets/rice.png"), text: "RICE" },
];

const MenuItem = ({ icon, text }) => (
  <View style={styles.menuItem}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/profile-pic.png")} // Replace with your profile picture path
          style={styles.profilePic}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textRow1}>Your Location</Text>
          <View style={styles.locationContainer}>
            <Image
              source={require("../assets/location.png")} // Replace with your location icon path
              style={styles.locationIcon}
            />
            <Text style={styles.textRow2}>Savar, Dhaka</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/bell-icon.png")} // Replace with your bell icon path
            style={styles.notification}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/search-icon.png")} // Replace with your magnifying glass icon path
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/search-settings.png")} // Replace with your settings icon path
            style={styles.settingsIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Slide Menu */}
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <MenuItem icon={item.icon} text={item.text} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menuContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:
      "linear-gradient(180deg, rgba(230, 230, 230, 0) 0%, #FEFFBF 100%) ",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  textRow1: {
    fontSize: 16,
    color: "#000",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textRow2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  notification: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A43EC",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 50,
    height: 70,
    width: 350,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  settingsIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  menuContainer: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  menuItem: {
    alignItems: "center",
    marginRight: 20,
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 10,
    width: 86, // Set width for square shape
    height: 96, // Set height for square shape
  },
  menuIcon: {
    width: 30, // Adjust icon size if needed
    height: 30, // Adjust icon size if needed
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    color: "#000",
  },
});

export default HomeScreen;