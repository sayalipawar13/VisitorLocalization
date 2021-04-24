import React, {useState, useContext, useEffect, Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput,TouchableHighlight, Alert,Image} from 'react-native';
import {Register} from './Register';
import {GlobalContext} from '../context/GlobalState';

const FirstPage = ({navigation}) => {  
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
                        onPress={()=>navigation.navigate('QRscanner')}  
                        title="Sign in as Visitor"  
                        color="#0B5841"   
                    />  
                </View>  
                
            </View>  
        );  
    }  
 
  
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