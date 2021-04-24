import 'react-native-gesture-handler';
import React, { useState,useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Upload from './components/Upload';
import DisplayMap from './components/DisplayMap';
import {GlobalProvider,GlobalContext} from './context/GlobalState';
import Register from './components/Register';
import Login from "./components/Login";
import FirstPage from './components/FirstPage';
import AdminProfile from './components/AdminProfile';

const Stack = createStackNavigator();

const StackNavigator=()=>{

   const {register,state} = useContext(GlobalContext);
 // const [isSignedIn,setisSignedIn] =useState(false);
  // console.log(state.user.loggedIn)
  // console.log(state.user.username);

return(
  <NavigationContainer>
      
  <Stack.Navigator>
  {state.user.loggedIn ? (
<>
    {/* <Stack.Screen
      name="Admin Profile"
      component={AdminProfile}
      options={{ headerStyle: {
        backgroundColor: '#00e6ac' 
     }, headerTitleAlign:'center' }}
/> */}
<Stack.Screen
      name="Home"
      component={Upload}
      options={{ title: 'Choose a Map', headerStyle: {
        backgroundColor: '#00e6ac' 
     }, headerTitleAlign:'center' } }
    
    />
    <Stack.Screen
      name="DisplayMap"
      component={DisplayMap}
      options={{ title: 'View Map', headerStyle: {
        backgroundColor: '#00e6ac' 
     }, headerTitleAlign:'center' } }
    />

</>
) : (
<>
<Stack.Screen
  name="Visitor Localization"
  component={FirstPage}
  options={{ headerStyle: {
    backgroundColor: '#00e6ac' 
 }, headerTitleAlign:'center' }}
/>
<Stack.Screen
      name="Register Admin"
      component={Register}
      // options={{ title: 'Overview' }}
      options={{ headerStyle: {
        backgroundColor: '#00e6ac' 
     }, headerTitleAlign:'center' }}
    />
    <Stack.Screen
      name="Login Admin"
      component={Login}
      // options={{ title: 'Overview' }}
      options={{ headerStyle: {
        backgroundColor: '#00e6ac' 
     }, headerTitleAlign:'center' }}
    />
</>
)}
   </Stack.Navigator>
</NavigationContainer>
);
}

export default App = () => {
  
    return (
      <GlobalProvider>
     <StackNavigator />
      </GlobalProvider>
    );
  }
