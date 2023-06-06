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
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Player from '../mediaload/Player';
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 230,
  },
});

export default function HomepageSlider () {
  const images = [
    { imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
    { imagePath: require('../img/krishna.jpg'), text: 'Krishna' },
    { imagePath: require('../img/shiva.jpg'), text: 'Shiva' },
    { imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
  ];
  const [isComponentOpen, setComponentOpen] = useState(false);

  const openComponent = () => {
    setComponentOpen(true);
  };

  return (
    <ScrollView horizontal>
      {images.map((item, index) => (
        <TouchableOpacity onPress={openComponent} key = {index}>
        <Image
        
        source={item.imagePath}
        style={styles.image}
      />
      </TouchableOpacity>
      
      ))}
      {isComponentOpen && <Player />}
    </ScrollView>
  );
};