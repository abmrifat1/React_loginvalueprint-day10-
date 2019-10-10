/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,TextInput,TouchableOpacity
} from 'react-native';



const App=() => {
  const [name,setName]=useState("");
  const saveUserName=(name)=>{
    setName(name);
  }
  const [phoneNumber,setPhone]=useState("");
  const[phonebooks,setPhonebooks]=useState([]);
  const [namebook,setFullName]=useState([]);
  const savePhone=(phone)=>{
     setPhone(phone)
  }

  const handleSaveBtnOnClick=()=>{
    const fullName={
      name
    }
    setFullName(currentNamebook=>[...currentNamebook,fullName])
    console.log(namebook);


    const phone={
      name,phoneNumber
    }
    setPhonebooks(currentPhonebooks=>[...currentPhonebooks,phone])
    console.log(phonebooks)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{padding:10,alignItems:"center"}}>
          <TextInput placeholder="Enter your name" style={styles.inputStyle} value={name}onChangeText={saveUserName}/>
          <TextInput placeholder="Enter your phone number" style={styles.inputStyle} keyboardType="phone-pad" value={phoneNumber} onChangeText={savePhone}/>
          <TouchableOpacity style={{backgroundColor:"#9ee0e0",alignItems:"center",padding:10,width:"50%"}} onPress={handleSaveBtnOnClick}>
            <Text>Submit</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle:{backgroundColor:"#9fffe0",color:"black",marginVertical:10,width:"100%"}
});

export default App;
