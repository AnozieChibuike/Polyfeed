import React, { useState } from "react";
import HelpCircle from "../../assets/help-circle.png";
import ContainerImage from "../../assets/container.png";
import UserImage from "../../assets/user-02.png";
import { SafeAreaView } from "react-native-safe-area-context";
import container from "../constant/style";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Images from "../components/Images";

import colors from "../constant/colors";
import { height } from "../constant/scale";
import Button from "../components/Button";
import Terms from "../components/Terms";

export default SignupScreen = ({ navigation }) => {
  const [isActive, setIsActive] = useState(null);
  return (
    <SafeAreaView style={[container, { paddingBottom: 30 }]}>
      <Terms />
      <View style={styles.center}>
        <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 20 }}>
          Are you signing up as
        </Text>
        <View
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setIsActive(0);
              }}
            >
              <View
                style={{
                  backgroundColor: isActive == 0 ? "green" : colors.lightGrey,
                  padding: 36,
                  margin: 10,
                  borderRadius: 20,
                }}
              >
                <Images src={ContainerImage} />
              </View>
            </TouchableOpacity>

            <Images src={HelpCircle} />
          </View>
          <Text style={{ color: colors.darkShade }}>Organization</Text>
        </View>
        <View
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setIsActive(1);
              }}
            >
              <View
                style={{
                  backgroundColor: isActive == 1 ? "green" : colors.lightGrey,
                  padding: 36,
                  margin: 10,
                  borderRadius: 20,
                }}
              >
                <Images src={UserImage} />
              </View>
            </TouchableOpacity>
            <Images src={HelpCircle} />
          </View>
          <Text style={{ color: colors.darkShade }}>Person</Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
        <Button
          text="Continue"
          bg={colors.generalWine}
          color="white"
          onclick={() => {
            if (isActive != null)
              navigation.navigate("Signup2", {
                type: isActive == 0 ? "Organization" : "Person",
              });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    display: "flex",
    flexDirection: "column",
    height: (height * 4.3) / 6,
    justifyContent: "space-between",
    marginVertical: 30,
  },
});
