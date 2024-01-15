import Terms from "../components/Terms";
import Button from "../components/Button";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constant/colors";
import github from "../../assets/github";
import google from "../../assets/google";
import facebook from "../../assets/facebook";
import { SvgXml } from "react-native-svg";
import Input from "../components/Input";
import { height } from "../constant/scale";

export default SignupScreen2 = ({ navigation, route }) => {
  const [type, setType] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    type: "",
  });
  const [errors, setErrors] = useState({});
  useLayoutEffect(() => {
    setType(route.params.type);
    setInputs({
      email: "",
      password: "",
      password2: "",
      name: "",
      type: route.params.type,
    });
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.name) {
      isValid = false;
      handleError("Field required", "name");
    } else if (inputs.name < 4) {
      isValid = false;
      handleError("Field length should be greater than 4", "name");
    }
    if (!inputs.email) {
      isValid = false;
      handleError("Please input email", "email");
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      handleError("Please input a valid email", "email");
    }
    if (!inputs.password) {
      handleError("Please input a password", "password");
    } else if (inputs.password.length < 8) {
      isValid = false;
      handleError("Min Password length of 8", "password");
    } else if (inputs.password !== inputs.password2) {
      isValid = false;
      handleError("Passwords don't match", "password2");
    }
    if (isValid) {
      register();
    }
  };

  const register = () =>
    navigation.navigate("confirm", {
      data: inputs,
    });
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={[
          container,
          {
            // paddingBottom: 30,
            // flex: 1,
            height: height + 50,
            paddingHorizontal: 20,
            paddingTop: 40,
          },
        ]}
      >
        <Terms />
        <View style={styles.top}>
          <Text style={{ color: colors.grey }}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={{ color: colors.generalWine, fontWeight: "700" }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Create an account
        </Text>
        <Text>Get started on Polyfeed today</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 9,
              borderWidth: 1,
              borderColor: colors.grey,
            }}
          >
            <SvgXml xml={google} />
          </View>
          <View
            style={{
              backgroundColor: "#316FF6",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 9,
            }}
          >
            <SvgXml xml={facebook} />
          </View>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 9,
            }}
          >
            <SvgXml xml={github} />
          </View>
        </View>
        <Text style={{ alignSelf: "center", color: colors.grey }}>or</Text>
        <Input
          placeholder={
            type === "Organization" ? "Organization name" : "Username"
          }
          error={errors.name}
          onFocus={() => {
            handleError(null, "name");
          }}
          onChangeText={(text) => {
            handleChange(text, "name");
          }}
          info={true}
        />
        <Input
          error={errors.email}
          onFocus={() => {
            handleError(null, "email");
          }}
          onChangeText={(text) => {
            handleChange(text, "email");
          }}
          placeholder="Email address"
        />
        <Input
          placeholder="Password"
          error={errors.password}
          onFocus={() => {
            handleError(null, "password");
          }}
          onChangeText={(text) => {
            handleChange(text, "password");
          }}
          password={true}
        />
        <Input
          error={errors.password2}
          onFocus={() => {
            handleError(null, "password2");
          }}
          onChangeText={(text) => {
            handleChange(text, "password2");
          }}
          placeholder="Confirm Password"
          password={true}
        />
        <Text
          style={{
            color: colors.grey,
            fontSize: 10,
            marginTop: 5,
            marginBottom: 30,
          }}
        >
          By continuing you agree to Polyfeed{" "}
          <Text style={{ color: colors.generalWine }}>terms of service</Text>{" "}
          and
          <Text style={{ color: colors.generalWine }}> privacy policy</Text>
        </Text>
        <View style={{ position: "absolute", bottom: 15, left: 10, right: 10 }}>
          <Button
            text="Sign up"
            bg={colors.generalWine}
            color="white"
            onclick={() => {
              validate();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 40,
  },
});
