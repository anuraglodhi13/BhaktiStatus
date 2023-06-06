import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/components/homepage/Homepage";
import VideoPlayer from "./src/components/mediaload/VideoPlayer";
import ImageShow from "./src/components/mediaload/ImageShow";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header for all screens
        }}
      >
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="ImageShow" component={ImageShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
