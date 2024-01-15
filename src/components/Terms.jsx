import { StyleSheet, Text, View } from "react-native";
import Images from "./Images";
import ArrowCircle from "../../assets/arrow-circle-broken-right.jpg";
export default Terms = () => {
  return (
    <View style={styles.top}>
      <Images src={ArrowCircle} />
      <View style={{ marginLeft: 7 }}>
        <View style={styles.topText}>
          <Text style={[styles.Text, { color: colors.darkShade }]}>See</Text>
          <Text style={[styles.Text, { color: colors.generalWine }]}>
            {" "}
            terms of service
          </Text>
        </View>
        <View style={styles.topText}>
          <Text style={[styles.Text, { color: colors.darkShade }]}>and</Text>
          <Text style={[styles.Text, { color: colors.generalWine }]}>
            {" "}
            privacy policy
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  topText: {
    display: "flex",
    flexDirection: "row",
  },
  Text: {
    fontSize: 11,
  },
});
