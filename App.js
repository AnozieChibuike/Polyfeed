import { StatusBar } from "expo-status-bar";
import LandingScreen from "./src/screens/LandingScreen";
import SignupScreen1 from "./src/screens/SignupScreen1";
import ConfirmScreen from "./src/screens/ConfirmScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen2 from "./src/screens/SignupScreen2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup1"
            component={SignupScreen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup2"
            component={SignupScreen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="confirm"
            component={ConfirmScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} />
      {/* <Test /> */}
    </>
  );
}
