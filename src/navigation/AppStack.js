import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from "./TabNavigator"

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Home" component = {TabNavigator} />
        </Stack.Navigator>
    )
}

export default AppStack