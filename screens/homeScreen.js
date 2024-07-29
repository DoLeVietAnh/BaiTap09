import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";

// Import images as modules
import profilePic from "../assets/profilepic.png";
import locationIcon from "../assets/location.png";
import bellIcon from "../assets/bell-icon.png";
import searchIcon from "../assets/search-icon.png";
import searchSettings from "../assets/search-settings.png";
import pizzaIcon from "../assets/pizzaicon.png";
import burgerIcon from "../assets/burger.png";
import drinksIcon from "../assets/drinks.png";
import riceIcon from "../assets/rice.png";
import ItemMenuImage from "../assets/hot-offer.png";
import hotBurger from "../assets/hot-burger.png";
import hotPizza from "../assets/hot-pizza.png";

const menuItems = [
  { id: "1", icon: pizzaIcon, text: "PIZZA" },
  { id: "2", icon: burgerIcon, text: "BURGER" },
  { id: "3", icon: drinksIcon, text: "DRINKS" },
  { id: "4", icon: riceIcon, text: "RICE" },
];

const MenuItem = ({ icon, text }) => (
  <View style={styles.menuItem}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
  </View>
);

const carouselItems = [
  { image: ItemMenuImage },
  { image: ItemMenuImage },
  { image: ItemMenuImage },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E6E6E6", "#FEFFBF"]}
        style={styles.headerGradient}
      />
      <View style={styles.header}>
        <Image source={profilePic} style={styles.profilePic} />
        <View style={styles.textContainer}>
          <Text style={styles.textRow1}>Your Location</Text>
          <View style={styles.locationContainer}>
            <Image source={locationIcon} style={styles.locationIcon} />
            <Text style={styles.textRow2}>Savar, Dhaka</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={bellIcon} style={styles.notification} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Image source={searchSettings} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <View>
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

      <View style={styles.carouselContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          autoplay
          autoplayTimeout={3} // Time between slides
        >
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.popularItemsContainer}>
        <View style={styles.popularItemsHeader}>
          <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
            Popular items
          </Text>
          <Text style={{ marginRight: 10, fontSize: 18 }}>View all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredItemsContainer}
        >
          <View style={styles.featuredItem}>
            <Image source={hotBurger} style={styles.featuredImage} />
            <Text style={styles.featuredText}>BURGER</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={hotPizza} style={styles.featuredImage} />
            <Text style={styles.featuredText}>PIZZA</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200, // Adjust height as needed
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    paddingBottom: 20,
  },
  profilePic: {
    width: 60,
    height: 60,
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
    width: 60,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A43EC",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    height: 70,
    width: 350,
    alignSelf: "center",
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
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  menuItem: {
    alignItems: "center",
    marginRight: 20,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 10,
    width: 110, // Set width for square shape
    height: 120, // Set height for square shape
  },
  menuIcon: {
    width: 35, // Adjust icon size if needed
    height: 30, // Adjust icon size if needed
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    color: "#000",
  },
  carouselContainer: {
    width: "98%",
    height: 180,
    alignSelf: "center", // Center the carousel
    marginTop: 20, // Reduce marginTop to decrease space
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  popularItemsContainer: {
    position: "absolute",
    bottom: 0,
  },
  popularItemsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 20,
  },
  featuredItemsContainer: {
    height: 220, // Increased height to accommodate image and text
    width: "100%",
    alignContent: "center",
  },
  featuredItem: {
    width: "80",
    height: 200, // Increased height to accommodate image and text
    justifyContent: "center", // Center the content vertically
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
    paddingLeft: 30,
  },
  featuredImage: {
    width: 180,
    height: 120, // Adjusted height for image
    marginBottom: 10, // Space between image and text
  },
  featuredText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
