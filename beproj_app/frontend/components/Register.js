import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TextInput,TouchableHighlight, Image} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
import {GlobalContext} from '../context/GlobalState';
import axios from 'axios';

const Register = ({navigation}) => {
  const {register,state} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    
    
//         geojsonData.user.loggedIn=true;
//         geojsonData.user.username=username;
//         navigation.navigate('DisplayMap',item.GeoJsonMap)

 async function registerF(){
 
    await register(username,password);
    // useEffect(()=>{
    //     dispatch({
    //         type:"REGISTER_USER",
    //         payload:x.username
    //       });
    //   },[]);
     
}

  return (
    <View style={styles.container}>
      <Image style={{width:410, height:350, paddingBottom:100}} source={require('../assets/LoginImg.jpg')}/>

      <TextInput style={styles.buttonContainer}
        name="username"
        onChangeText={(e) => setUsername(e)}
        placeholder="Enter username"
      />
      <TextInput style={styles.buttonContainer}
        //   value={destination}
        name="password"
        onChangeText={(e) => setPassword(e)}
        placeholder="Enter password"
      />
      <Button onPress={registerF} style={styles.buttonContainer} color="#019C6E" paddingTop="70" title="Submit" />
      <Button onPress={() => navigation.navigate('Login Admin')}  style={styles.buttonContainer} color="#0B5841" title="Login here" />
      
      {/* <TouchableHighlight 
  onPress={() => navigation.navigate('Login Admin')}>
    <View style={{padding:20,alignItems:"center",backgroundColor:"#03CE92", margin:20, marginTop:70, borderRadius:12, color:"white"}}>
    <Text>Login here</Text>
    </View>
  </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      backgroundColor: '#f0f0f0'
  },  
  buttonContainer: {  
      margin: 20 , 
      borderRadius: 12,
      zIndex: 2

  }, 
 

  multiButtonContainer: {  
      margin: 20,  
      flexDirection: 'row',  
      justifyContent: 'space-between' ,
  }  
})  

export default Register;
