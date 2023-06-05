import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 200,
  },
});

export default function HomepageSlider () {
  const images = [
    { imagePath: require('../img/shiva.jpg'), text: 'Shiva' },
    { imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
    { imagePath: require('../img/arrow.png'), text: 'More' },
    { imagePath: require('../img/krishna.jpg'), text: 'Krishna' },
    { imagePath: require('../img/shiva.jpg'), text: 'Shiva' },
    { imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
    { imagePath: require('../img/arrow.png'), text: 'More' },
  ];

  return (
    <ScrollView horizontal>
      {images.map((item, index) => (
        <Image
        source={item.imagePath}
        style={styles.image}
      />
      ))}
    </ScrollView>
  );
};