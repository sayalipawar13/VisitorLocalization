import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, FlatList } from 'react-native';
import MapView, { Geojson } from 'react-native-maps';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import gju from 'geojson-utils';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop:10,
    marginVertical: 40,
    marginHorizontal:20,
    // width: 400,
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  // button: {
  //   alignItems: "center",
  //   backgroundColor: "white",
  //   padding: 20
  // },
  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignContent: 'center',
    height: 40,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3
   },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "50%",
    textAlign: "center",
  }
});

const App = ({navigation}) => {
  const {state,getGeojson, uploadGeojson,logout} = useContext(GlobalContext);

  useEffect(() => {
    getGeojson();
  }, []);

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
          uploadGeojson({ GeoJsonMap: r, createdAt: moment() }, state.user.username);
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

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}> 
                        <Button onPress={logout} title="Logout" color="#019C6E" />
</View>
      <Text style={{marginVertical: 20}}>Upload Geojson File</Text>
      <FlatList 
        data={state.geojsonData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
        return(
          <>
              <View style={{ ...styles.tableRow, backgroundColor: "#ccffeb"}}>
                <Text style={{ ...styles.columnRowTxt}}>MAP NAME</Text>
                <Text style={styles.columnRowTxt}>OWNER</Text>
              </View>
            <TouchableHighlight underlayColor="#ffffff00"
              onPress={() => navigation.navigate('DisplayMap', item.GeoJsonMap)}>

              <View style={{ ...styles.tableRow, backgroundColor:  "white",marginBottom:15,elevation:5}}>
                <Text style={{ ...styles.columnRowTxt}}>{item.GeoJsonMap.id}</Text>
                <Text style={styles.columnRowTxt}>{item.owner}</Text>
              </View>
            </TouchableHighlight>
            </>
          )
        }}
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
      <View style={styles.buttonContainer}> 
      <Button onPress={selectOneFile} title="Upload new map" color="#019C6E"/>
    </View>
          
    </View>
    
  );
};
export default App;
