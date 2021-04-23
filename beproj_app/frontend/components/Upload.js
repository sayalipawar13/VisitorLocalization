import React, {useContext,useEffect} from 'react';
import {Text, View, StyleSheet, Button, TouchableHighlight, FlatList} from 'react-native';
import MapView, {Geojson} from 'react-native-maps';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import gju from 'geojson-utils';
import {GlobalContext} from '../context/GlobalState';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    height: '100%',
    margin: '20%',
    // width: 400,
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
});

const App = ({navigation}) => {
  const {state,getGeojson, uploadGeojson} = useContext(GlobalContext);

  useEffect(()=>{
    getGeojson();
  },[]);
  
  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // console.log('URI : ' + res.type);
      RNFS.readFile(res.uri, 'utf8')
        .then((result) => {
          const r = JSON.parse(result);
          var gj = {
            name: 'MyFeatureType',
            type: 'FeatureCollection',
            features: [],
          };
          const arr = r.features;
          arr.forEach((ele) => {
            if (ele.geometry.type == 'LineString') {
              gj.features.push(ele);
              // console.log(ele.id);
            }
          });
          uploadGeojson({GeoJsonMap:r,createdAt:moment()},state.user.username);
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
//  console.log(state.geojsonData);
  return (
    <View style={styles.container}>
      <Text>Upload Geojson File</Text>
      <Button onPress={selectOneFile} title="upload" />
    
<FlatList 
data={state.geojsonData}
renderItem={({item,index})=>(
  <TouchableHighlight 
  onPress={() => navigation.navigate('DisplayMap',item.GeoJsonMap)}>
    <View style={styles.button}>
    <Text>{item.GeoJsonMap.id}  {item.owner}</Text>
    </View>
  </TouchableHighlight>
)}
keyExtractor={(item, index) => index.toString()}
/>
      {/* {geojsonData.length==0 ? <Text>No maps found</Text> :  geojsonData.map((item)=>{
             <TouchableHighlight 
             onPress={() => navigation.navigate('DisplayMap')}>
               <View style={styles.button}>
               <Text>{item.id}ljkhjhg</Text>
               </View>
             </TouchableHighlight>
          })}
      */}
    </View>
  );
};
export default App;
