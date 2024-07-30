import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import profilePic from "../assets/profilepic.png";
import GobackIcon from "../assets/GobackIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import ForwardArrow from "../assets/ForwardArrow.png";
import Wallet from "../assets/Wallet.png";
import Moon from "../assets/Moon.png";
import Location from "../assets/LocationIconBlack.png";
import Settings from "../assets/Settings.png";
import Help from "../assets/help.png";
import LogoutIcon from "../assets/logout.png";

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#E6E6E6", "#FEFFBF"]}
        style={styles.headerGradient}
      />
      <LinearGradient
        colors={["#FEFFBF", "#E6E6E6"]}
        style={styles.footerGradient}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={GobackIcon} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image source={profilePic} style={styles.profileImage} />
        </View>
        <Text style={styles.nameText}>Đỗ Lê Việt Anh</Text>
        <Text style={styles.emailText}>BIT220014@st.cmc-u.edu.vn</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={HomeIcon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Home</Text>
          <Image source={ForwardArrow} style={styles.rightArrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={Wallet} style={styles.menuIcon} />
          <Text style={styles.menuText}>My Card</Text>
          <Image source={ForwardArrow} style={styles.rightArrowIcon} />
        </TouchableOpacity>
        <View style={styles.menuItem}>
          <Image source={Moon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "white", true: "#021526" }}
            thumbColor={isDarkMode ? "#021526" : "white"}
            ios_backgroundColor="#57A6A1"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={Location} style={styles.menuIcon} />
          <Text style={styles.menuText}>Track Your Order</Text>
          <Image source={ForwardArrow} style={styles.rightArrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={Settings} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
          <Image source={ForwardArrow} style={styles.rightArrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={Help} style={styles.menuIcon} />
          <Text style={styles.menuText}>Help Center</Text>
          <Image source={ForwardArrow} style={styles.rightArrowIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Image source={LogoutIcon} style={styles.menuIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    width: "100%",
    height: 150,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 40,
  },
  leftArrowIcon: {
    width: 24,
    height: 20,
    marginLeft: 10,
  },
  rightArrowIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 120,
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  imageWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  emailText: {
    fontSize: 14,
    color: "gray",
  },
  menuContainer: {
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: "#6200ee",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: "row",
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  footerGradient: {
    width: "100%",
    height: 500,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: "absolute",
    bottom: 0,
  },
});

export default ProfileScreen;
