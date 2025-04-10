import React from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import Icon from "@react-native-vector-icons/feather"

export default function OnboardingScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
    <View>
      <Text style={{fontSize: 30, fontWeight: "bold", color: "#000000"}}>GAMEON</Text>
    </View>
    <TouchableOpacity
    style={{backgroundColor: "#AD40AF", padding: 20, width: "90%", borderRadius: 5, flexDirection: "row", justifyContent: "space-between"}}
    onPress={() => navigation.navigate("Login")}
    >
      <Text style ={{fontWeight: "bold", fontSize: 18, color: "#ffffff"}}>Let's Begin</Text>
      <Icon name = "chevron-right" size = {25} color = "#ffffff"></Icon>
    </TouchableOpacity>
    </SafeAreaView>
  );
}