import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TextInput,TouchableHighlight} from 'react-native';
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
    <View>
      <TextInput
        name="username"
        onChangeText={(e) => setUsername(e)}
        placeholder="Enter username"
      />
      <TextInput
        //   value={destination}
        name="password"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
        placeholder="Enter password"
      />
      <Button onPress={registerF} title="Submit" />
      <TouchableHighlight 
  onPress={() => navigation.navigate('Login Admin')}>
    <View style={{padding:20,alignItems:"center",backgroundColor:"lightblue"}}>
    <Text>Login here</Text>
    </View>
  </TouchableHighlight>
    </View>
  );
};

export default Register;
