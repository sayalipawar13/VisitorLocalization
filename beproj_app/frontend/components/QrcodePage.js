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

import { CameraRoll } from "@react-native-community/cameraroll";
import RNFS from "react-native-fs";

  saveQrToDisk=()=> {
   	svg.toDataURL((data) => {
   		RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
   		  .then((success) => {
   			  return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
   		  })
   		  .then(() => {
   			  setState({ busy: false, imageSaved: true  })
   			  ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
   		  })
   	})
  };
 
const QRcodePage=()=>{
    const {state,getGeojson}=useContext(GlobalContext);
    useEffect(()=>{
        getGeojson();
      },[]);
      console.log(state.geojsonData[0]._id);

      const onSuccess=(e)=>{
          
      }
    return (
        <View>
            <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <TouchableOpacity >
            <Text >OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
          <QRCode
            value={'60817faa6ef3052ec40cce4a'}
            size={200}
            bgColor='#000000'
            fgColor='#FFFFFF'/>
        </View>
      );
}
   
export default QRcodePage;
