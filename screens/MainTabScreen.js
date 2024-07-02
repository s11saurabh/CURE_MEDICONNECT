import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import SplashScreen from "./Splash";
import DashboardScreen from "./Dashboard";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";

const SplashStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Splash"
      activeColor="#fff"
      //   barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="monitor-dashboard"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarColor: "#d02360",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const SplashStackScreen = ({ navigation }) => (
  <SplashStack.Navigator
    screenOptions={
      {
        //   headerShown: false,
      }
    }
  >
    <SplashStack.Screen name="Splash" component={SplashScreen} />
  </SplashStack.Navigator>
);
const DashboardStackScreen = ({ navigation }) => (
  <DashboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      //   headerShown: false,
    }}
  >
    <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
  </DashboardStack.Navigator>
);
