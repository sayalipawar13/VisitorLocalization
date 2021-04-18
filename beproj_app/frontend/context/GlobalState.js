import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from "axios";

const initialMapState={
    geojsonData:[{
        GeoJsonMap:Object,
        createdAt:null
    }],
    error:null,
    loading:true
}

export const GlobalContext = createContext(initialMapState);

export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialMapState);
   
    async function getGeojson(){
        try {
            const res = await axios.get("http://192.168.0.15:5000/api/maps/allMaps");
          dispatch({
            type:"GET_GEOJSON",
            payload:res.data.data
          });
          
        } catch (err) {
        //   dispatch({
        //     type:"EXPENSE_ERROR",
        //     payload:err.response.data.error
        //   })
        }
      
      };
    //Actions
    async function uploadGeojson(geojson){
        const config={
            headers:{
              'Content-Type': 'application/json'
            }
          }
          try {
            const res=await axios.post("http://192.168.0.15:5000/api/maps/uploadMap",geojson,config)
            dispatch({
                type:"UPLOAD_GEOJSON",
                payload:geojson
            });
          } catch (error) {
              
          }
       
    }
    return(
        <GlobalContext.Provider
        value={{
            geojsonData:state.geojsonData,
            error:state.error,
            loading:state.loading,
            getGeojson,
            uploadGeojson
        }}
        >{children}
        </GlobalContext.Provider>
    )
}