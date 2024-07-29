import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image } from "react-native";

import GobackIcon from "../assets/GobackIcon.png";
import TrashBin from "../assets/TrashBin.png";
import BannerImage from "../assets/shoppingBanner.png";
import BannerBurgers from "../assets/shoppingBurgers.png";

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#E6E6E6", "#FEFFBF"]}
        style={styles.headerGradient}
      />
      <View style={styles.header}>
        <Image source={GobackIcon} style={styles.GobackIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.textRow1}>Shopping Cart</Text>
        </View>
        <Image source={TrashBin} style={styles.TrashBin} />
      </View>
      <View style={styles.banner}>
        <Image source={BannerImage} style={styles.bannerImage} />
        <Image source={BannerBurgers} style={styles.bannerBurger} />
      </View>
      <View style={styles.cartContainer}>
        <View style={styles.BigText}>
          <Text style={styles.textDish}>BURGER</Text>
          <Text style={styles.textPrice}>$28</Text>
        </View>
        <View style={styles.SmallText}>
          <Text style={styles.textDish}>4.9(3k+Rating)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "20%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    paddingBottom: 30,
    paddingHorizontal: "3%",
  },
  GobackIcon: {
    height: 14,
    width: 18,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  textRow1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  TrashBin: {
    height: 30,
    width: 28,
  },
  banner: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: 400,
    height: 217,
  },
  bannerBurger: {
    position: "absolute",
    top: 150,
    left: 26,
    right: 0,
    width: 360,
    height: 90,
  },
  cartContainer: {
    color: "#F5F5F5",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  BigText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
    marginVertical: 10,
  },
  textDish: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  textPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7D78F1",
    marginRight: 10,
  },
});

export default App;
