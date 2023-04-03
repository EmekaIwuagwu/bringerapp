import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const StuntsHomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.homePage}>Stunts</Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: 8,
        }}
      >
        <Image
          style={{ width: 102, height: 68, top: 60 }}
          source={require("../assets/stunt1.png")}
        />
        <Image
          style={{ width: 102, height: 68, top: 60 }}
          source={require("../assets/result.png")}
        />
        <Image
          style={{ width: 102, height: 68, top: 60 }}
          source={require("../assets/result.png")}
        />
        <Image
          style={{ width: 102, height: 68, top: 60 }}
          source={require("../assets/result.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: 8,
          marginTop: 60,
        }}
      >
        <Image
          style={{ width: 96, height: 93, top: 60 }}
          source={require("../assets/buy.png")}
        />

        <Image
          style={{ width: 96, height: 93, top: 60 }}
          source={require("../assets/sell.png")}
        />

        <Image
          style={{ width: 96, height: 93, top: 60 }}
          source={require("../assets/deliver.png")}
        />
      </View>

      <View>

      </View>
    </View>
  );
};

export default StuntsHomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  homePage: {
    left: 16,
    top: 25,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    width: 237,
    height: 181,
    top: 160,
    right: -140,
    borderRadius: 10,
    backgroundColor: "#400080",
  },
});
