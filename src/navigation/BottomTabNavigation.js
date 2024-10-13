import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/settings/Settings";
import HomeScreen from "../screens/home/HomeScreen";
import Logout from "../screens/logout/Logout";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CameraScreen from "../screens/camera/Camera";
import BarCodeScreen from "../screens/barCodeScanner/BarCode";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeScreen") {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === "Camera") {
            return (
              <MaterialIcons name="camera-alt" size={size} color={color} />
            );
          }
          else if (route.name === "BarCoder") {
            return (
              <MaterialIcons name="camera" size={size} color={color} />
            );
          } 
          else if (route.name === "Logout") {
            return <MaterialIcons name="logout" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#707070",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Camera"
        component={CameraScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="BarCoder"
        component={BarCodeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Logout"
        component={Logout}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
