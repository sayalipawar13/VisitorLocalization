import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
import {GlobalContext} from '../context/GlobalState';
import axios from 'axios';

const Register = ({navigation}) => {
  const {register,state} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   async function register() {
//     const res = await axios.post("http://192.168.0.15:5000/user/register",
//       {
//         username,
//         password,
//       },
//       {withCredentials: true,
//     });
    
    
//         geojsonData.user.loggedIn=true;
//         geojsonData.user.username=username;
//         navigation.navigate('DisplayMap',item.GeoJsonMap)
    
   
//   }

 async function registerF(){
 
    await register(username,password);
    // console.log(user.loggedIn);
    
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
        onChangeText={(e) => setPassword(e)}
        placeholder="Enter password"
      />
      <Button onPress={registerF} title="Submit" />
      <Text>{ state.user.loggedIn}</Text>
    </View>
  );
};

export default Register;
