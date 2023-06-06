import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HomePageCategory from './src/components/homepage/HomepageCategory';
import HomepageSlider from './src/components/homepage/HomepageSlider';
import HomepageVerticalScrolling from './src/components/homepage/HomepageVerticalScrolling';
import Navbar from './src/components/homepage/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
  <Navbar/>
  <ScrollView>
  <HomePageCategory/>
  <HomepageSlider/>
  <HomepageVerticalScrolling/>
  </ScrollView>
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
