import React from 'react';
import {Text, View, StyleSheet, Button, TextInput, Image} from 'react-native';


const AdminProfile = ({navigation}) => {

return(
  <>
    <View style={{backgroundColor: 'white'}}>
    <Image style={{width:200, height:200, marginTop:50, marginBottom:30, justifyContent: 'center', alignSelf: 'center',}} source={require('../assets/ProfilePic2.jpg')}/>
      <Text style={{textAlign:'center', color:"#50e0a2", fontSize:25}}>Welcome Admin!</Text> 
    </View>

    <View style={{justifyContent: 'center', alignSelf: 'center', marginTop:20}}>
      
    </View>
    </>
);   
}

export default AdminProfile;
