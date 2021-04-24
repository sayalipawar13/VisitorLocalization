import React, { Component ,useContext,useEffect} from 'react'
import QRCode from 'react-native-qrcode-svg';
import {GlobalContext} from '../context/GlobalState';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ToastAndroid,
    TextInput
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const QRscanner=()=>{
    const {state,getGeojson}=useContext(GlobalContext);
    // useEffect(()=>{
    //     getGeojson();
    //   },[]);
    //   console.log(state.geojsonData[0]._id);

      async function onSuccess(e){
        console.log(e.data);
        const id=e.data
          const res=await axios.post("http://192.168.0.15:5000/visitor/viewMap",{id});
          console.log(e.data);
          
      }
    return (
        <View>
            <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <TouchableOpacity >
            <Text >Scan the QR code to view a map</Text>
          </TouchableOpacity>
        }
      />
        </View>
      );
}
   
export default QRscanner;
