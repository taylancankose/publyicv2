import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import placeHistory from '../../data/placeHistory';

export const PlaceContext = createContext();

type params = {
  query: string;
  id: string;
  type: string;
};

const PlaceProvider = ({children}) => {
  const API_KEY = 'AIzaSyAZbmPol46VupOyBRRFayp78ZzBj4_cPdA';
  const [place, setPlace] = useState();
  const [data, setData] = useState();
  const [selectPlace, setSelectPlace] = useState();
  const [searchPlaceResult, setSearchPlaceResult] = useState();
  const [nearbyPlaces, setNearbyPlaces] = useState();
  const [location, setLocation] = useState();
  const [active, setActive] = useState('bar');
  const [input, setInput] = useState('');

  const getSearchPlaceResults = async (query: params) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`,
    );
    const response = await res.data;
    setSearchPlaceResult(response);
  };

  const getPlacesDetail = async (id: params) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${API_KEY}`,
    );
    const response = await res.data;
    setSelectPlace(response);
  };

  const getNearbyPlaces = async (type: params) => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location?.coords?.latitude}%2C${location?.coords?.longitude}&radius=1500&type=${type}&key=${API_KEY}`,
    );
    const response = await res.data;
    setNearbyPlaces(response);
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Publyc wants to access your location',
          message: 'We need to know your location to show you places near you',
          buttonNegative: 'No',
          buttonPositive: 'OK',
          buttonNeutral: 'Ask me later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('you can use location');
      } else {
        console.log('permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const getLocation = () => {
    Geolocation?.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (active === 'Recently Visited') {
      setActive(active);
      setNearbyPlaces(placeHistory);
    } else {
      getNearbyPlaces(active);
    }
  }, [location, active]);

  const handleSearch = async () => {
    if (input === '') {
      return;
    }
    await getSearchPlaceResults(input);
    setInput('');
  };

  return (
    <PlaceContext.Provider
      value={{
        place,
        data,
        setPlace,
        setData,
        API_KEY,
        selectPlace,
        setSelectPlace,
        getPlacesDetail,
        getSearchPlaceResults,
        searchPlaceResult,
        getLocation,
        getNearbyPlaces,
        active,
        setActive,
        nearbyPlaces,
        setNearbyPlaces,
        handleSearch,
        input,
        setInput,
        setSearchPlaceResult,
      }}>
      {children}
    </PlaceContext.Provider>
  );
};

export default PlaceProvider;
