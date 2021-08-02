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

const QRscanner=({navigation})=>{
    const {state,getGeojson}=useContext(GlobalContext);
    // useEffect(()=>{
    //     getGeojson();
    //   },[]);
    //   console.log(state.geojsonData[0]._id);

      async function onSuccess(e){
        // console.log(e.data);
        const id=e.data
        try {
          const res=await axios.post("http://192.168.0.8:5000/visitor/viewMap",{id});
          // console.log(res.data);
          navigation.navigate('VisitorDisplayMap',res.data.GeoJsonMap)
        } catch (error) {
          console.log(error)
        }
         
      }
    return (
        // <View>
            <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={{fontSize:18}}>Scan the QR code to view a map</Text>
        }
        // bottomContent={
        //   <TouchableOpacity >
        //     <Text style={{fontSize:18}} >Scan the QR code to view a specific map</Text>
        //   </TouchableOpacity>
        // }
      />
        // </View>
      );
}
   
export default QRscanner;
