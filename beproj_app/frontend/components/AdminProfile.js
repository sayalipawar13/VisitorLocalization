import React from 'react';
import {Text, View, StyleSheet, Button, TextInput, Image} from 'react-native';

const AdminProfile = ({navigation}) => {

return(
  <>
    <View style={{backgroundColor: 'white', height:'100%'}}>
    <Image style={{width:200, height:200, marginTop:50, marginBottom:30, justifyContent: 'center', alignSelf: 'center',}} source={require('../assets/ProfilePic2.jpg')}/>
      <Text style={{textAlign:'center', color:"#50e0a2", fontSize:25}}>Hello Admin!</Text> 
      <Text style={{color:"#474a49", textAlign: "justify",marginHorizontal: 20,marginTop:30, fontSize:20}}>
        Welcome to Visitor Localization!
        Admins can upload and delete GeoJSON files which will be rendered inside this app.
        Users can ask for navigation instructions from the app to go from one point to another.
        Effectively we have built a minimalistic version of Google maps for the college.

    </Text>
          <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={() => navigation.navigate('Upload')}  
                        title="Proceed" 
                        color="#019C6E"    
                        marginTop="120"
                    />  
          </View> 
    
    </View>
</>
);   
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      backgroundColor: '#f0f0f0'
  },  
  buttonContainer: {  
      marginVertical: 80,
      marginHorizontal: 15,
      justifyContent: 'center',
      alignContent: 'center',
      height: 40,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3
  },    
})

export default AdminProfile;
