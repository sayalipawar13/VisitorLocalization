import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import MapView, {Geojson, Marker} from 'react-native-maps';
import PathFinder from 'geojson-path-finder';
import point from 'turf-point';
// import geoJson from './Geojson.json';
import gju from 'geojson-utils';
import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  buttonsContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.9,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'lightgrey',
  },
});

const DisplayMap = ({route}) => {
  const {geojsonData} = useContext(GlobalContext); // provide all available maps data
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const { params : geoJsonMap}=route  //specific map 

  const [GMap,setGMap]=useState(geoJsonMap);
  
  var listOfMarkers = [];
  var extractionOfLineStrings = {
    name: 'MyFeatureType',
    type: 'FeatureCollection',
    features: [],
  };
  var MapWithPath = {
    name: 'MyFeatureType',
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      },
    ],
  };
  const arr = geoJsonMap.features;
  var x = extractionOfLineStrings.features;
  var f,y,path;
  var l,sourcePoint,destPoint = [];

  arr.forEach((element) => {
    
    if (element.geometry.type == 'LineString') {
      extractionOfLineStrings.features.push(element);
    } else if (element.geometry.type == 'Point') {
      listOfMarkers.push([
        element.geometry.coordinates,
        element.properties.name,
      ]);
    } else if (element.geometry.type == 'Polygon') {
      MapWithPath.features.push(element);


     
    }
  });
//below handleSubmit is the logic for finding a path between two given locations.
const handleSubmit =()=>{
 var m1=MapWithPath.features
  var sourceInPolygon,destInPolygon
const findInPolygon=(p)=>{
  x.forEach((element) => {
    y = element.geometry.coordinates;
   
    y.forEach((e) => {
      f = gju.pointInPolygon(
        {type: 'Point', coordinates: e},
        p
      );
      if (f == true) {
        l = e;
  console.log(e);

      }
    });
  });
  return l;
}

  m1.forEach(element => {
   
   if(element.properties && element.geometry.type == 'Polygon'){
     
  if (element.properties.name == source){
sourceInPolygon=element.geometry
sourcePoint=findInPolygon(sourceInPolygon);
  }
  if (element.properties.name == destination){
    destInPolygon=element.geometry
    destPoint=findInPolygon(destInPolygon);
      }
    }
    
  });
 
  // console.log(destPoint,sourcePoint);

  var pathFinder = new PathFinder(extractionOfLineStrings, {
    weightFn: function (a, b, props) {
      var dx = a[0] - b[0];
      var dy = a[1] - b[1];
      return Math.sqrt(dx * dx + dy * dy);
    },
  });
  path = pathFinder.findPath(
    point(sourcePoint),
    point(destPoint),
  );
  const res = path.path;

  res.forEach((element) => {
    MapWithPath.features[0].geometry.coordinates.push(element);    //generating a linestring 
  });
  setDestination("");
  setSource("");
  setGMap(MapWithPath);
}
  return (
    <View style={styles.container}>
      <MapView
        // onPress={(e) => console.log(e.nativeEvent.coordinate)}

        style={styles.map}
        initialRegion={{
          longitude: 73.01636584103107,
          latitude: 19.029871062517362,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {listOfMarkers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude: marker[0][1], longitude: marker[0][0]}}
            title={marker[1]}
            // description={marker[1]}
          />
        ))}

        <Geojson
          geojson={GMap}
          strokeColor="red"
          fillColor="transparent"
          strokeWidth={2}
        />
      </MapView>
      <View style={styles.buttonsContainer}>
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
          <Button onPress={handleSubmit} title="Submit"/>
      </View>
    </View>
  );
};

export default DisplayMap;
