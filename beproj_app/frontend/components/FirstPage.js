import React from 'react';
import {View, StyleSheet, Button, Alert, Image} from 'react-native';

const FirstPage = ({navigation}) => {  
  const onPressButton = () => {  
        Alert.alert('You clicked the button!')
    }  
        return (  

            <View style={styles.container}>  
              <Image style={{width:400, height:300, paddingBottom:100}} source={require('../assets/FirstPageImg.png')}/>
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={() => navigation.navigate('Register Admin')}  
                        title="Admin" 
                        color="#019C6E"    
                        paddingTop="70"  
                    />  
                </View>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={onPressButton}  
                        title="Visitor"  
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
        margin: 20 , 
        borderRadius: 12,
        zIndex: 2

    },  

    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between' ,
    }  
})  

export default FirstPage;