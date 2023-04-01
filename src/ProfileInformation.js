import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

const ProfileInformation = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.profileHeader}>Profile Information</Text>
      <Text style={styles.homeText2}>Please Provide your name and an Optional Profile Photo</Text>
      <Image
        style={{ width: 152, height: 152, top: 12, left: 135 }}
        source={require("../assets/profile_images.png")}
      />

      <TextInput
        placeholder=" Type your name here"
        onChangeText={(AccountNum) => this.setState({ AccountNum })}
        style={styles.input}
        maxLength={15}
      />

      <TouchableOpacity onPress={() => Redirect()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  profileHeader:{
    marginTop : 40,
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 20
  },
  homeText2:{
    flexShrink : 1,
    marginTop : 10,
    flexWrap : "wrap",
    textAlign : 'center',
    fontWeight : 400
  },
  input:{
    marginTop : 30,
    backgroundColor : '#D9D9D957',
    width : 282,
    height : 41,
    top : 30,
    left : 66,
    borderRadius : 10
  },
  button:{
    width : 282,
    height : 41,
    top : 120,
    left : 66,
    borderRadius : 10,
    backgroundColor : '#400080'
  },
  buttonText:{
    fontWeight : "bold",
    color : '#FFFF',
    textAlign : 'center',
    top : 10
  },
});
