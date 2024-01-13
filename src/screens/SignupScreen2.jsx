import { SafeAreaView } from "react-native-safe-area-context";
import Terms from "../components/Terms";
import Button from "../components/Button";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constant/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import github from "../../assets/github";
import google from '../../assets/google'
import facebook from '../../assets/facebook'
import Images from "../components/Images";
import {SvgXml} from 'react-native-svg'

export default SignupScreen2 = ({ navigation, route }) => {
  const [type, setType] = useState('')
  useEffect(() => {
    setType(route.params.type);
  }, []);
  return (
    <ScrollView contentContainerStyle={[container, { paddingBottom: 30 }]}>
      <Terms />
      <View style={styles.top}>
        <Text style={{color: colors.grey}}>Already have an  account?</Text>
        <TouchableOpacity><Text style={{color: colors.generalWine, fontWeight: '700'}}>Log in</Text></TouchableOpacity>
      </View>
      <Text>Create an account</Text>
      <Text>Get started on Polyfeed today</Text>
      <View>
        <View>
          <Icon name={'google'} />
        </View>
        <View style={{backgroundColor:'white'}}>
          <Icon name={'facebook'} style={{color: 'blue'}} />
        </View>
        <View style={{backgroundColor:'black'}}>
          <SvgXml source={github} />  
                
        </View>
      </View>
      
      <View style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
        <Button
          text="Sign up"
          bg={colors.generalWine}
          color="white"
          onclick={() => {
              navigation.navigate("confirm", {
                type: type
              });
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
})