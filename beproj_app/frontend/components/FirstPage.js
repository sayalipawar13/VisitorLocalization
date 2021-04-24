import React from 'react';
import {View, StyleSheet, Button, Alert, Image} from 'react-native';

const FirstPage = ({navigation}) => {  
  const onPressButton = () => {  
        Alert.alert('You clicked the button!')
    }  
        return (  

            <View style={styles.container}>  
              <Image style={{width:400, height:300, marginBottom:60}} source={require('../assets/FirstPageImg.png')}/>
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={() => navigation.navigate('Register Admin')}  
                        title="Sign in as Admin" 
                        color="#019C6E"    
                        paddingTop="70"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={onPressButton}  
                        title="Sign in as Visitor"  
                        color="#0B5841"  
                    />  
                </View>  
                
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
        marginVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignContent: 'center',
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3
    },    
})  

export default FirstPage;