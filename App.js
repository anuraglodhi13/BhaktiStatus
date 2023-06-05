import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePageCategory from './src/components/HomepageCategory';
import HomepageSlider from './src/components/HomepageSlider';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
  <Navbar/>
  <HomePageCategory/>
  <HomepageSlider/>
    </View>

    // <View style={styles.container}>
    //   <Text>Hi water</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
