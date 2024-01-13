import { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import colors from "../constant/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

export default ConfirmScreen = ({ navigation, route }) => {
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  let placeholder = "";
  useEffect(() => {
    setType(route.params.type);
  }, []);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={[container, { paddingBottom: 30, paddingTop: 90 }]}
        >
          <Text style={{ color: colors.grey }}>Hello</Text>
          <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
            {type === "Organization"
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
                  type === "Organization" ? "Organization name" : "Username"
                }
                style={{ color: "black", fontSize: 17 }}
              ></TextInput>
            </View>
            {error && (
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
                <Text style={{ color: "red" }}>{error}</Text>
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
                if (isActive != null)
                  navigation.navigate("confirm", {
                    type: isActive == 0 ? "Organization" : "Person",
                  });
              }}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};
