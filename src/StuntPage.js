import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const StuntPage = () => {
  return (
    <View>
      <TextInput
        placeholder=" What do you want to Buy?"
        onChangeText={(AccountNum) => this.setState({ AccountNum })}
        style={styles.input}
        maxLength={15}
      />

      
    </View>
  );
};

export default StuntPage;

const styles = StyleSheet.create({});
