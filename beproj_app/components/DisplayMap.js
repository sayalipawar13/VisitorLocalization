import React ,{useState,useContext} from "react";
import { Text, View, StyleSheet,Button,TextInput } from "react-native";
import MapView, { Geojson,Marker } from "react-native-maps"; 
import PathFinder from 'geojson-path-finder';
import point from 'turf-point';
import geoJson from './Geojson.json';
import gju from 'geojson-utils';
import {GlobalContext} from '../context/GlobalState';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    height: "100%",
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    flex: 1 ,
    ...StyleSheet.absoluteFillObject,
  },
  buttonsContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    opacity:0.9,

  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderRadius:20,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor:'lightgrey'

  },
});
var geo = {
  "name":"MyFeatureType",
  "type":"FeatureCollection",
  "features":[]
};
var gj = {
  "name":"MyFeatureType",
  "type":"FeatureCollection",
  "features":[
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates":[]
      }
    }
  ]
 
};
var listOfMarkers=[]
const arr=geoJson.features
arr.forEach(element => {
  if(element.geometry.type=="LineString"){
    geo.features.push(element)
  }
  if(element.geometry.type=="Point"){
    listOfMarkers.push([element.geometry.coordinates,element.properties.name])
  }
  if(element.geometry.type=="Polygon"){
    gj.features.push(element)
  }
});
// console.log(listOfMarkers);
var x=geo.features
var f;
var l=[]
x.forEach(element => {
  y=element.geometry.coordinates
  y.forEach(e => {
    f=gju.pointInPolygon({"type":"Point","coordinates":e},
    {
      "type": "Polygon",
      "coordinates": [
        [
          [
            73.01643557846546,
            19.02999467408479
          ],
          [
            73.01642149686813,
            19.029954421097294
          ],
          [
            73.0164848640561,
            19.029934136123522
          ],
          [
            73.01649861037731,
            19.029976607784516
          ],
          [
            73.01643557846546,
            19.02999467408479
          ]
        ]
      ]
    })
    if(f==true){
      l=e
    }
   
  });
});
console.log(l);


    var pathFinder = new PathFinder(geo,  
{
  weightFn: function(a, b, props) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
  }
  });
    path = pathFinder.findPath( point( [
            73.01659248769283,
            19.029871062517362
          ]),   point(l));
    const res=path.path
    
  res.forEach(element => {
    gj.features[0].geometry.coordinates.push(element)
  });
  
console.log(gj)

const App = () => {
const {geojsonData}=useContext(GlobalContext);
const [source,setSource]=useState('');
const [destination,setDestination]=useState('');

return(
  <View style={styles.container}
  >
    <MapView
                // onPress={(e) => console.log(e.nativeEvent.coordinate)}

      style={styles.map}
      initialRegion={{
        longitude: 73.01636584103107,
        latitude:  19.029871062517362,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    
        {listOfMarkers.map((marker,index) => (
    
    <Marker
      key={index}
      coordinate={{ latitude: marker[0][1], longitude:marker[0][0] }}
      title={marker[1]}
      // description={marker[1]}
    />
    
  ))}
   
      <Geojson
        geojson={gj}
    
        strokeColor="red"
        fillColor="transparent"
        strokeWidth={2}
      />
    </MapView>
    <View
        style={styles.buttonsContainer}
    >
      
        <TextInput
          value={source}
          name="source"
          onChangeText={(e) => setSource(e)}
          placeholder="Enter source"
          style={styles.input}
        />
         <TextInput
          value={destination}
          name="destination"
          onChangeText={(e) => setDestination(e)}
          placeholder="Enter destination"
          style={styles.input}
        />
    </View>
  </View>
)};

export default App;
