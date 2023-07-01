import React from 'react';
import ThemeProvider from './src/context/ThemeContext';
import Router from './src/Router';
import {NavigationContainer} from '@react-navigation/native';
import PlaceProvider from './src/context/PlaceContext';
import AuthProvider from './src/context/AuthContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
      <AuthProvider>
        <ThemeProvider>
          <PlaceProvider>
            <Router />
          </PlaceProvider>
        </ThemeProvider>
      </AuthProvider>
      {/* </Provider> */}
    </NavigationContainer>
  );
}

export default App;
