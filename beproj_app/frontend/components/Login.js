import React, {useState, useContext} from 'react';
import {View, StyleSheet, Button, TextInput, Image} from 'react-native';
import {GlobalContext} from '../context/GlobalState';
// import {AdminProfile} from './components/AdminProfile';

const Login = ({navigation}) => {
  const {login, state} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginF() {
    await login(username, password);
  }

  return (
    <View>
      <Image style={{width:410, height:300, marginVertical:30}} source={require('../assets/loginImg2.jpg')}/>
      <TextInput
        name="username"
        style={styles.input}
        onChangeText={(e) => setUsername(e)}
        placeholder="Enter username"
      />
      <TextInput
        //   value={destination}
        name="password"
        style={styles.input}
        onChangeText={(e) => setPassword(e)}
        secureTextEntry={true}
        placeholder="Enter password"
      />
      <View style={styles.buttonContainer}>
      <Button onPress={loginF} color="#019C6E" title="Submit" />
      </View>
      {/* <Text>{ state.user.loggedIn}</Text> */}
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


export default Login;