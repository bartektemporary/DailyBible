import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import LoginScreen from "../screens/LoginScreen"
import OnboardingScreen from "../screens/OnboardingScreen"

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component = {OnboardingScreen} name = "Onboarding"/>
      <Stack.Screen component = {LoginScreen} name = "Login"/>
    </Stack.Navigator>
  );
};

export default AuthStack