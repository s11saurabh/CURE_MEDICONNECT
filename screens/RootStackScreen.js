import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import Dashboard from "./Dashboard";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </>
  );
};
export default RootStackScreen;
