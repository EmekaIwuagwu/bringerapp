import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, TextInput } from "react-native";
import React , {useState, useMemo} from "react";
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";


const VerifyNumber2 = () => {

  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const Redirect = () =>{
    if (otp =="123456"){
      navigation.navigate('HomePage');
    }else{
      Alert.alert('Invalid OTP');
    }
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
      value={otp}
        placeholder = "Enter OTP"
        onChangeText={(otp)=>setOtp(otp)}
        style={styles.input}
        maxLength={15} 
    />

  </View>

    <View>
    <TouchableOpacity onPress={()=> Redirect()}>  
        <View style={styles.button}>  
        <Text style={styles.buttonText}>Next</Text>  
        </View>  
      </TouchableOpacity>  
    </View>
      
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
    marginTop : 50,
    padding: 5,
    backgroundColor : '#D9D9D957',
    width : 282,
    height : 46,
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
