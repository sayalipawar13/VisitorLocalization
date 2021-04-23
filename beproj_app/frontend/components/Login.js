import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
import {GlobalContext} from '../context/GlobalState';
import axios from 'axios';

const Login = ({navigation}) => {
  const {login, state} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginF() {
    await login(username, password);
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
      <Button onPress={loginF} title="Submit" />
      {/* <Text>{ state.user.loggedIn}</Text> */}
    </View>
  );
};

export default Login;
