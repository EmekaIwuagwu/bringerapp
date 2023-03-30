import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerifyPhoneNumber from "./src/VerifyPhoneNumber";
import VerifyNumber2 from "./src/VerifyNumber2";
import StuntPage from "./src/StuntPage";
import ProfileInformation from "./src/ProfileInformation";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Verify Number"  component={VerifyPhoneNumber} />
        <Stack.Screen name="VerifyNumber2" initialRouteName='VerifyNumber2' component={VerifyNumber2} />
        <Stack.Screen name="Stunt Page" component={StuntPage} />
        <Stack.Screen name="Profile" component={ProfileInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
