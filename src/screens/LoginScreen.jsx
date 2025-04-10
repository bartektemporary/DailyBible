import React from "react"
import {SafeAreaView, Text} from "react-native"

export default function LoginScreen() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
            <View style={{paddingHorizontal: 25}}>
                <View style={{alignItems: "center"}}>
                    //icon
                </View>
                <Text style={{fontSize: 28, fontWeight: "500", marginBottom: 20}}>Login</Text>
            </View>
        </SafeAreaView>
    )
}