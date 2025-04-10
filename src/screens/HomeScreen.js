import React from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: "#ffffff"}}>
            <View style={{padding: 20}}>
            <View style = {{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                <Text style={{fontSize: 16}}>Hello, John Doe!</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}