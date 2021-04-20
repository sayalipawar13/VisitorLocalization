export default (state,action) =>{
    switch (action.type) {
        case "GET_GEOJSON":
            return{
                ...state,
                loading:false,
                geojsonData:action.payload
            };
        case "UPLOAD_GEOJSON":
            return{
                ...state,
                geojsonData:[...state.geojsonData,action.payload]
            };
        case "SHOW_ERRORS":
            return{
                ...state,
                error:action.payload
            };
        default:
            return state;
    }
}


