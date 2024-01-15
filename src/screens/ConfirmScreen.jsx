import { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../constant/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

export default ConfirmScreen = ({ navigation, route }) => {
  const [error, setErrors] = useState({ name: "" });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    type: "",
  });
  useEffect(() => {
    console.log(route.params.data);
    setInputs(route.params.data);
    // console.log(inputs);
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.name) {
      isValid = false;
      handleError("Field required", "name");
    } else if (inputs?.name.length < 4) {
      isValid = false;
      handleError("Field must be longer than 4", "name");
    }

    if (isValid) {
      register();
    }
  };

  const register = () => console.log(inputs);

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={[
            container,
            { paddingBottom: 30, paddingTop: 90 },
          ]}
        >
          <Text style={{ color: colors.grey }}>Hello</Text>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
            {inputs.type === "Organization"
              ? "Confirm Organization name"
              : "Pick a username"}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            consequatur numquam quod, animi, eius velit modi, ratione excepturi
            deserunt nihil veritatis doloribus porro. Recusandae id sunt
            aspernatur repellat laudantium ut.
          </Text>
          <View>
            <View
              style={[
                {
                  borderBottomColor: colors.grey,
                  display: "flex",
                  justifyContent: "center",
                  height: 50,
                  borderBottomWidth: 1,
                  marginTop: 30,
                  marginBottom: 15,
                  paddingLeft: 10,
                },
              ]}
            >
              <TextInput
                placeholder={
                  inputs.type === "Organization"
                    ? "Organization name"
                    : "Username"
                }
                style={{ color: "black", fontSize: 17 }}
                value={inputs.name}
                onFocus={() => {
                  handleError(null, "name");
                }}
                onChangeText={(text) => {
                  handleChange(text, "name");
                }}
              ></TextInput>
            </View>
            {error.name && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name={"times-circle"}
                  style={{
                    color: "red",
                    marginRight: 5,
                  }}
                />
                <Text style={{ color: "red" }}>{error.name}</Text>
              </View>
            )}
          </View>
          <View
            style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}
          >
            <Button
              text="Continue"
              bg={colors.generalWine}
              color="white"
              onclick={() => {
                validate();
              }}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};
