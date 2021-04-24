import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
import {GlobalContext} from '../context/GlobalState';
import axios from 'axios';

const Register = ({navigation}) => {
  const {register, state} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    userError: false,
    passError: false,
  });

  const validate = () => {
    setErr({
      userError: false,
      passError: false,
    });
    if (!username) {
      setErr((prev) => ({...prev, userError: true}));
    }
    if (!password) {
      setErr((prev) => ({...prev, passError: true}));
    }
    // console.log(err.userError);
    if (err.userError || err.passError) {
      return false;
    }
    return true;
  };
  async function registerF() {
    // const isValid = validate();
    // if (isValid) {
    await register(username, password);
    // }
  }
  // const {userError, passError} = err;
  return (
    <View style={styles.container}>
      <Image
        style={{width: 450, height: 300, marginBottom: 40}}
        source={require('../assets/LoginImg.jpg')}
      />

      <TextInput
        style={styles.input}
        value={username}
        name="username"
        onChangeText={(e) => setUsername(e)}
        placeholder="Enter username"
      />
      {err.userError ? (
        <Text style={{color: 'red', paddingLeft: 15}}>"Email is required"</Text>
      ) : null}
      <TextInput
        style={styles.input}
        //   value={destination}
        name="password"
        value={password}
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
        placeholder="Enter password"
      />
      {err.passError ? (
        <Text style={{color: 'red', paddingLeft: 15}}>
          Password is required
        </Text>
      ) : null}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            if (!validate()) return;
            registerF();
          }}
          style={styles.buttonContainer}
          color="#019C6E"
          title="Submit"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Login Admin')}
          style={styles.buttonContainer}
          color="#0B5841"
          title="Login here"
        />
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
    elevation: 3,
  },
});

export default Register;
