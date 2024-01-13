import { Text, TouchableOpacity,Platform } from "react-native";
import colors from "../constant/colors";

export default Button = ({ text, onclick,bc, color, bg, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onclick}
      style={[
        {
          height: 45,
          borderColor: bc || bg,
          borderWidth: 1,
          marginBottom: 15,
          backgroundColor: bg,
          borderRadius: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <Text style={{ color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};
