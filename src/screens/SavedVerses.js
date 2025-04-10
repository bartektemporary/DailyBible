import React from "react"
import { SafeAreaView, View, Text } from "react-native"

export default function SavedVerses() {
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "#ffffff"}}>
        <View style={{padding: 20}}>
        <View style = {{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
            <Text style={{fontSize: 16}}>Hello, John Doe!</Text>
        </View>
        </View>
    </SafeAreaView>
  );
}