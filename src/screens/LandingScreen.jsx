import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import container from "../constant/style";
import { StyleSheet, Text, View } from "react-native";
import Images from "../components/Images";
import colors from "../constant/colors";
import PolyfeedLogo from "../../assets/Polyfeed.png";
import { height, width } from "../constant/scale";
import LandingBg from "../../assets/LandingBackground.gif";
import Button from "../components/Button";
import Terms from "../components/Terms";

export default LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[container,]}>
      <Terms />
      <View style={styles.Center}>
        <Images src={PolyfeedLogo} style={{ marginTop: -90 }} />
        <Text
          style={{
            color: colors.generalWine,
            fontWeight: 700,
            fontSize: 25,
            marginTop: 10,
          }}
        >
          POLYFEED
        </Text>
      </View>
      <Images src={LandingBg} style={styles.bgImage} />
      <View style={{ position: "absolute", bottom: 20, left: 10, right: 10 }}>
        <Button
          text="Sign up"
          color={colors.generalWine}
          bg="white"
          bc={colors.darkShade}
          onclick={() => {
            navigation.navigate("Signup1");
          }}
        />
        <Button text="Log in" color="white" bg={colors.generalWine} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Center: {
    height: height / 1.45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    opacity: 0.3,
    height: "100%",
    position: "absolute",
    zIndex: -1,
    bottom: 27,
    width: width,
    height: height / 2,
  },
});
