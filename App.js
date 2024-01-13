import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import SignupScreen1 from "./src/screens/SignupScreen1";
import ConfirmScreen from "./src/screens/ConfirmScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignupScreen2 from "./src/screens/SignupScreen2";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
          <Stack.Screen name="Signup1" component={SignupScreen1} options={{headerShown: false}} />
          <Stack.Screen name="Signup2" component={SignupScreen2} options={{headerShown: false}} />
          <Stack.Screen name="confirm" component={ConfirmScreen} options={{headerShown: false}} />
         </Stack.Navigator>
       </NavigationContainer>
       <StatusBar hidden={true} />
     </>
  );
}

//
// import { StyleSheet, Text, View } from "react-native";
// import LandingScreen from "./src/screens/LandingScreen";

// import style from "./src/constant/style";
// import { height } from "./src/constant/scale";
// import SignUpScreen from "./src/screens/SignUpScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import DashboardScreen from "./src/screens/DashboardScreen";



// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
//           <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
//           <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false, gestureEnabled:false}} />
//         </Stack.Navigator>
//       </NavigationContainer>
//       <StatusBar hidden={true} />
//     </>
//   );
// }
