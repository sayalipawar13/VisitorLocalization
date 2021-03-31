export default (state,action) =>{
    switch (action.type) {
        case "UPLOAD_GEOJSON":
            return{
                ...state,
                geojsonData:[action.payload, ...state.geojsonData]
            }
        default:
            return state;
    }
}


