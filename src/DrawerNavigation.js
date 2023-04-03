import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StuntPage from "./StuntPage";
import ProfileInformation from "./ProfileInformation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StuntsHomePage from "./StuntsHomePage";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="StuntsHome">
      <Drawer.Screen
        name="StuntsHome"
        component={StuntsHomePage}
        options={{ title: "Bringer" }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileInformation}
        options={{ title: "My Profile" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
