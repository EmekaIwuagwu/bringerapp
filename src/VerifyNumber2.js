import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, TextInput } from "react-native";
import React , {useState, useMemo} from "react";
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";


const VerifyNumber2 = () => {

  const navigation = useNavigation();

  const Redirect = () =>{
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 61, height: 61, top: 48, left: 177 }}
        source={require("../assets/bringer_logo-removebg-preview.png")}
      />
      <Text style={styles.hometext}>Verify your Phone Number</Text>
      <Text style={styles.hometext2}>Bringer will need to verify your PhoneNumber</Text>

      <View style={{flexDirection :'row', alignItems : 'center', justifyContent :'space-evenly', paddingHorizontal:8}}>
      <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
        <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
        <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
        <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
        <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
        <TextInput
        placeholder = " "
        onChangeText={AccountNum => this.setState({AccountNum})}
        style={styles.input}
        maxLength={15} 
    />
  </View>

      <TouchableOpacity onPress={()=> Redirect()}>  
        <View style={styles.button}>  
        <Text style={styles.buttonText}>Next</Text>  
        </View>  
      </TouchableOpacity>  
      
    </View>
  );
};

export default VerifyNumber2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  hometext:{
    marginTop : 80,
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 20
  },
  hometext2:{
    flexShrink : 1,
    marginTop : 10,
    flexWrap : "wrap",
    textAlign : 'center',
    fontWeight : 400
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
  input:{
    marginTop : 25,
    backgroundColor : '#D9D9D957',
    width : 40,
    height : 46,
    top : 30,
    borderRadius : 10
  },
  picker :{
    top : 40,
    height: 41, 
    width: 282,
    alignSelf : 'center',
    borderRadius : 10,
    backgroundColor : '#D9D9D957'
  }
});
