import React, {useState, useContext} from 'react';
import {View, StyleSheet, Button, TextInput, Image} from 'react-native';
import {GlobalContext} from '../context/GlobalState';

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
      <Image style={{width:450,height:300, marginBottom:40}} source={require('../assets/LoginImg.jpg')}/>

      <TextInput style={styles.input}
        name="username"
        onChangeText={(e) => setUsername(e)}
        placeholder="Enter username"
      />
      <TextInput style={styles.input}
        //   value={destination}
        name="password"
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}
        placeholder="Enter password"
      />
      <View style={styles.buttonContainer}>
      <Button onPress={registerF} color="#019C6E" title="Submit" />
      </View>
      <View style={styles.buttonContainer}>
      <Button onPress={() => navigation.navigate('Login Admin')} color="#0B5841" title="Login here" />
      </View>
      
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
      backgroundColor: '#f0f0f0',
  },  
  
  input: {
    margin: 15,
    height: 40,
    borderRadius: 10,
    borderColor: '#0B5841',
    borderWidth: 1,
 },
 
 buttonContainer: {
  marginVertical: 10,
  marginHorizontal: 15,
  justifyContent: 'center',
  alignContent: 'center',
  height: 40,
  borderRadius: 10,
  overflow: 'hidden',
  elevation: 3
 }

})  



export default Register;
