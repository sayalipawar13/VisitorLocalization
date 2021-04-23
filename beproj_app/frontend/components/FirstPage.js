import React, {useState, useContext, useEffect, Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput,TouchableHighlight, Alert} from 'react-native';
import {Register} from './Register';
import {GlobalContext} from '../context/GlobalState';

const FirstPage = ({navigation}) => {  
  const onPressButton = () => {  
        Alert.alert('You clicked the button!')
    }  
  
        return (  

            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={() => navigation.navigate('Register Admin')}  
                        title="Admin"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={onPressButton}  
                        title="Visitor"  
                        color="#009933"  
                    />  
                </View>  
                
            </View>  
        );  
    }  
 
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  

export default FirstPage;