import { TextInput, Text, View, StyleSheet } from "react-native";
import colors from "../constant/colors";
import { useState } from "react";
import Images from "./Images";
import HelpCircle from "../../assets/help-circle.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
export default Input = ({ placeholder, error, password, info, ...props }) => {
  const [passwordState, setPasswordState] = useState(password);
  return (
    <>
      <View>
        <View style={[{}, styles.view]}>
          <TextInput
            secureTextEntry={passwordState}
            placeholder={placeholder}
            style={{ color: "black", fontSize: 14, flex: 1 }}
            {...props}
          />
          {info && (
            <Images src={HelpCircle} style={{ width: 20, height: 20 }} />
          )}
          {password && (
            <Icon
              onPress={() => setPasswordState(!passwordState)}
              name={passwordState ? "eye-outline" : "eye-off-outline"}
              color={colors.grey}
              size={23}
            />
          )}
        </View>
        {error && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon2
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
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    borderRadius: 10,
    borderEndWidth: 0.3,
    borderStartWidth: 0.3,
    borderColor: colors.grey,
    height: 40,
    marginVertical: 10,
    // borderStyle: 'dashed',
    paddingLeft: 10,
  },
});
