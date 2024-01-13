import { StyleSheet,Platform } from "react-native";
import { height, width } from "./scale";
import colors from "./colors";

const ios = Platform.OS == 'ios'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: ios ? 0 : 20,
        height: height,
        width: width,
        display: "flex",
        backgroundColor: 'white'
    },
    text: {
        color: 'white'
    }
})

export const text = styles.text
export default container = styles.container; 