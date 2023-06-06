import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomePageCategory = () => {
  const images = [
    { imagePath: require("../img/krishna.jpg"), text: "Krishna" },
    { imagePath: require("../img/shiva.jpg"), text: "Shiva" },
    { imagePath: require("../img/hanuman.png"), text: "Hanuman" },
    { imagePath: require("../img/durga.jpg"), text: "Maa Durga" },
    { imagePath: require("../img/ff8000.png"), text: "More" },
  ];
  return (
    <View style={styles.container}>
      {images.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={item.imagePath} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomePageCategory;
