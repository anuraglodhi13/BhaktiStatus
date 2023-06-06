import React from 'react';
import {FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  Text
} from 'react-native';

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#E5E5E5'
    },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
    marginTop: 10,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff8000',
  },
  textVideoContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
  },
  videoText1 : {
    fontWeight:'bold',
    fontSize:15,
  },
  videoText2 : {
    fontWeight: '300',
    fontSize:12,
  },
  icon: {
    marginHorizontal: 80,
  },

});

export default function HomepageVerticalScrolling () {
  const images = [
    { type : 'image',imagePath: require('../img/shiva.jpg'), text: 'Shiva' },
    { type : 'image',imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { type : 'image',imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
    { type : 'image',imagePath: require('../img/krishna.jpg'), text: 'Krishna' },
    { type : 'image',imagePath: require('../img/shiva.jpg'), text: 'Shiva' },
    { type : 'image',imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { type : 'image',imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
    { type : 'video',imagePath: require('../img/hanuman.png'), text: 'Hanuman' },
    { type : 'video',imagePath: require('../img/durga.jpg'), text: 'Maa Durga' },
  ];

  return (
    <ScrollView  contentContainerStyle={styles.container}>
      {images.map((item, index) => (
        
        <View key = {index}>
            <Image
         source={item.imagePath}
        style={styles.image}
         /> 
         {item.type === 'video' ? (<View style={styles.textVideoContainer}>
            <Text style = {styles.videoText1}>
                Hi This is Video
            </Text>
            <Text style = {styles.videoText2} >
                Hi This is Video
            </Text>
         
        </View>):(<View style={styles.textContainer}>
         <FontAwesome name="download" size={24} color="white" style={styles.icon}/>
         <FontAwesome name="share" size={24} color="white" style={styles.icon}/>
         
        </View>)}
         
         
        </View>
       

      ))}
      
    </ScrollView>
  );
};