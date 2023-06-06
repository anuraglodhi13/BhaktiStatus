import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { FontAwesome } from "@expo/vector-icons";

const VideoPlayer = ({ navigation }) => {
  const clickBackButton = () => {
    navigation.navigate("Home");
  };

  const images = [
    { type: "image", imagePath: require("../img/shiva.jpg"), text: "Shiva" },
    {
      type: "image",
      imagePath: require("../img/hanuman.png"),
      text: "Hanuman",
    },
    {
      type: "image",
      imagePath: require("../img/durga.jpg"),
      text: "Maa Durga",
    },
    {
      type: "image",
      imagePath: require("../img/krishna.jpg"),
      text: "Krishna",
    },
    { type: "image", imagePath: require("../img/shiva.jpg"), text: "Shiva" },
    {
      type: "image",
      imagePath: require("../img/hanuman.png"),
      text: "Hanuman",
    },
    {
      type: "image",
      imagePath: require("../img/durga.jpg"),
      text: "Maa Durga",
    },
    {
      type: "video",
      imagePath: require("../img/hanuman.png"),
      text: "Hanuman",
    },
    {
      type: "video",
      imagePath: require("../img/durga.jpg"),
      text: "Maa Durga",
    },
  ];
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={clickBackButton}>
        <FontAwesome name="angle-left" size={24} color="black" />
      </TouchableOpacity>
      <Video
        source={require("../img/video2.mp4")}
        resizeMode="contain"
        style={styles.video}
        useNativeControls={true}
        shouldPlay={true}
      ></Video>
      <View style={styles.textContainer}>
        <FontAwesome
          name="download"
          size={24}
          color="#ff8000"
          style={styles.icon}
        />
        <FontAwesome
          name="share"
          size={24}
          color="#ff8000"
          style={styles.icon}
        />
      </View>

      {/* Vertical Scrolling */}
      <ScrollView contentContainerStyle={stylesForVertialScrolling.container}>
        {images.map((item, index) => (
          <View key={index}>
            {item.type === "video" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("VideoPlayer")}
              >
                <Image
                  source={item.imagePath}
                  style={stylesForVertialScrolling.image}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("ImageShow")}
              >
                <Image
                  source={item.imagePath}
                  style={stylesForVertialScrolling.image}
                />
              </TouchableOpacity>
            )}

            {item.type === "video" ? (
              <View style={stylesForVertialScrolling.textVideoContainer}>
                <Text style={stylesForVertialScrolling.videoText1}>
                  Hi This is Video
                </Text>
                <Text style={stylesForVertialScrolling.videoText2}>
                  Hi This is Video
                </Text>
              </View>
            ) : (
              <View style={stylesForVertialScrolling.textContainer}>
                <FontAwesome
                  name="download"
                  size={24}
                  color="white"
                  style={stylesForVertialScrolling.icon}
                />
                <FontAwesome
                  name="share"
                  size={24}
                  color="white"
                  style={stylesForVertialScrolling.icon}
                />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  icon: {
    marginHorizontal: 80,
  },
});

const stylesForVertialScrolling = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
    marginTop: 12,
  },

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ff8000",
  },
  textVideoContainer: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
  },
  videoText1: {
    fontWeight: "bold",
    fontSize: 15,
  },
  videoText2: {
    fontWeight: "300",
    fontSize: 12,
  },
  icon: {
    marginHorizontal: 80,
  },
});

export default VideoPlayer;
