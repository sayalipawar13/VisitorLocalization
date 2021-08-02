import React, {Component, useContext, useEffect} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {GlobalContext} from '../context/GlobalState';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
  TextInput,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRcodePage = () => {
  const {state, getGeojson} = useContext(GlobalContext);
  useEffect(() => {
    getGeojson();
  }, []);

  return (
    <View>
      <QRCode
        // size={200}
        bgColor="#000000"
        fgColor="#FFFFFF"
      />
    </View>
  );
};

export default QRcodePage;
