import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialMapState = {
  geojsonData: [
    {
      GeoJsonMap: '',
      createdAt: null,
      owner:''
    },
  ],
  user: {
    loggedIn: false,
    username: '',
  },
  error: null,
  loading: true,
};

export const GlobalContext = createContext({state: {...initialMapState}});

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, {...initialMapState});

  async function register(username, password) {
    try {
      const res = await axios.post(
        'http://192.168.43.97:5000/user/register',
        {
          username,
          password,
        },
        {withCredentials: true},
      );
      // const x=JSON.parse(res.data)
      // console.log(res.data.username);
      //react native cookies
      //react native storage

      dispatch({
        type: 'REGISTER_USER',
        payload: username,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function login(username, password) {
    try {
      const res = await axios.post(
        'http://192.168.43.97:5000/user/login',
        {
          username,
          password,
        },
        {withCredentials: true},
      );
      console.log(res.data);
      dispatch({
        type: 'LOGIN_USER',
        payload: username,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getGeojson() {
    try {
      const res = await axios.get('http://192.168.43.97:5000/api/maps/allMaps');
      dispatch({
        type: 'GET_GEOJSON',
        payload: res.data.data,
      });
      // console.log(res.data.data);
    } catch (err) {
      //   dispatch({
      //     type:"EXPENSE_ERROR",
      //     payload:err.response.data.error
      //   })
    }
  }
  //Actions
  async function uploadGeojson(geojson,username) {
    console.log(geojson,username);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://192.168.43.97:5000/api/maps/uploadMap',
        {geojson,username},
        config,
      );
      dispatch({
        type: 'UPLOAD_GEOJSON',
        payload: geojson,
      });
    } catch (error) {}
  }
  return (
    <GlobalContext.Provider
      value={{
        // geojsonData:state.geojsonData,
        // user:state.user,
        // error:state.error,
        // loading:state.loading,
        state,
        getGeojson,
        register,
        login,
        uploadGeojson,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
