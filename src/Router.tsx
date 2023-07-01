import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Rate from './screens/Rate/Rate';
import PlaceDetails from './screens/PlaceDetails/PlaceDetails';
import {AuthContext} from './context/AuthContext';

const Stack = createNativeStackNavigator();

const Router = () => {
  const {user} = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Router;
