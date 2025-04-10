import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "@react-native-vector-icons/feather"

import HomeScreen from "../screens/HomeScreen"
import SavedVerses from "../screens/SavedVerses"
import ProfileScreen from "../screens/ProfileScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions = {{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen name = "Home2" component = {HomeScreen} options = {{
                tabBarIcon: ({color, size}) => (
                    <Icon name = "home" color = {color} size = {size}/>
                )
            }}/>
            <Tab.Screen name = "SavedVerses" component = {SavedVerses} options = {{
                tabBarIcon: ({color, size}) => (
                    <Icon name = "heart" color = {color} size = {size}/>
                )
            }}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen} options = {{
                tabBarIcon: ({color, size}) => (
                    <Icon name = "user" color = {color} size = {size}/>
                )
            }}/>
        </Tab.Navigator>
    )
}