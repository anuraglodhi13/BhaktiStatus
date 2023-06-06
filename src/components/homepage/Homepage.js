import { ScrollView, StyleSheet, Text, View } from "react-native";
import Navbar from "./Navbar";
import HomePageCategory from "./HomepageCategory";
import HomepageSlider from "./HomepageSlider";
import HomepageVerticalScrolling from "./HomepageVerticalScrolling";

export default function Homepage({ navigation }) {
  return (
    <View>
      <Navbar />
      <ScrollView>
        <HomePageCategory />
        <HomepageSlider navigation={navigation} />
        <HomepageVerticalScrolling navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
