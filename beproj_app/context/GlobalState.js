import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
const initialMapState={
    geojsonData:[]
}

export const GlobalContext = createContext(initialMapState);

export const GlobalProvider =({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialMapState);


    //Actions
    function uploadGeojson(geojson){
        dispatch({
            type:"UPLOAD_GEOJSON",
            payload:geojson
        });
    }
    return(
        <GlobalContext.Provider
        value={{
            geojsonData:state.geojsonData,
            uploadGeojson
        }}
        >{children}
        </GlobalContext.Provider>
    )
}