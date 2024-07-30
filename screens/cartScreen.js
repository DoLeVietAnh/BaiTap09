import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import GobackIcon from "../assets/GobackIcon.png";
import TrashBin from "../assets/TrashBin.png";
import BannerImage from "../assets/shoppingBanner.png";
import BannerBurgers from "../assets/shoppingBurgers.png";
import Star from "../assets/star.png";
import Counter from "../assets/counterIcon.png";
import LocationIcon from "../assets/location.png";
import LocationEditor from "../assets/locationWrite.png";
import CreditCard from "../assets/creditcard.png";

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
          <Image source={Star} style={styles.Star} />
          <Text style={styles.textRating}>4.9(3k+ Rating)</Text>
          <Image source={Counter} style={styles.Counter} />
        </View>
        <View style={styles.LocationDiv}>
          <View style={styles.addressContainer}>
            <Image source={LocationIcon} style={styles.LocationIcon} />
            <View style={styles.addressTextContainer}>
              <Text style={styles.addressLabel}>Delivery Address</Text>
              <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
            </View>
          </View>
          <View style={styles.LocationEditor}>
            <View style={styles.editContainer}>
              <Image source={LocationEditor} style={styles.editIcon} />
            </View>
          </View>
        </View>
        <View style={styles.paymentConatiner}>
          <Image source={CreditCard} style={styles.creditCard} />
          <Text style={styles.PaymentMethod}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal (2)</Text>
            <Text style={styles.summaryValue}>$56</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$6.20</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Payable Total</Text>
            <Text style={styles.summaryValue}>$62.20</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
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
    paddingBottom: 10,
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
    width: 370,
    height: 200,
    borderRadius: 20,
  },
  bannerBurger: {
    position: "absolute",
    top: 120,
    left: 0,
    right: 0,
    width: 360,
    height: 90,
  },
  cartContainer: {
    color: "#F5F5F5",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#F5F5F5",
  },
  BigText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
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
  SmallText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  textRating: {
    fontSize: 12,
    marginLeft: 10,
  },
  Star: {
    height: 20,
    width: 20,
  },
  Counter: {
    height: 23,
    width: 76,
    marginLeft: 116,
  },
  LocationDiv: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  LocationIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 10,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C0EADB",
    height: 67,
    width: "60%",
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  addressTextContainer: {
    marginLeft: 0,
  },
  addressLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 14,
  },
  LocationEditor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A9A6FF",
    height: 67,
    width: "20%",
    borderRadius: 5,
    marginRight: 30,
  },
  editIcon: {
    height: 22,
    width: 22,
  },
  paymentConatiner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    width: "100%",
    marginTop: 10,
    paddingBottom: 20,
  },
  creditCard: {
    height: 30,
    width: 50,
    marginHorizontal: 20,
  },
  PaymentMethod: {
    fontSize: 17,
    fontWeight: "bold",
  },
  changeText: {
    color: "#7D78F1",
    fontSize: 15,
    marginLeft: 35,
    borderColor: "#4A43EC",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  summaryContainer: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  separator: {
    height: 10,
  },
  confirmButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    alignSelf: "center",
    height: 50,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
