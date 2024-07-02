import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Splash from "./screens/Splash";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/ProfileScreen";
import Explore from "./screens/ExploreScreen";
import MainTabScreen from "./screens/MainTabScreen";
import RootStackScreen from "./screens/RootStackScreen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator initialRouteName="Splash">
          <Drawer.Screen name="Splash" component={MainTabScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

{
  /* <Stack.Navigator
          screenOptions={{
            title: "Splash Screen Screen",
            headerStyle: {
              backgroundColor: "#009387",
            },
            headerTintColor: "#fff",
            // headerShown: false,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              title: "Splash Screen Screen",
              headerStyle: {
                backgroundColor: "#009387",
              },
            }}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator> */
}
