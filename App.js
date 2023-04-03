import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyPhoneNumber from "./src/VerifyPhoneNumber";
import VerifyNumber2 from "./src/VerifyNumber2";
import DrawerNavigation from "./src/DrawerNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Verify Number" component={VerifyPhoneNumber} />
        <Stack.Screen
          name="VerifyNumber2"
          initialRouteName="VerifyNumber2"
          component={VerifyNumber2}
        />
        <Stack.Screen
          name="HomePage"
          initialRouteName="VerifyNumber2"
          options={{
            headerShown: false,
          }}
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
