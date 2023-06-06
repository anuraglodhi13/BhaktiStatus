import React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

export default function HomepageSlider({ navigation }) {
  const images = [
    { imagePath: require("../img/hanuman.png"), text: "Hanuman" },
    { imagePath: require("../img/durga.jpg"), text: "Maa Durga" },
    { imagePath: require("../img/krishna.jpg"), text: "Krishna" },
    { imagePath: require("../img/shiva.jpg"), text: "Shiva" },
    { imagePath: require("../img/hanuman.png"), text: "Hanuman" },
    { imagePath: require("../img/durga.jpg"), text: "Maa Durga" },
  ];

  return (
    <ScrollView horizontal>
      {images.map((item, index) => (
        <TouchableOpacity key={index}>
          <Image source={item.imagePath} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 230,
  },
});
