import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();
import auth from '@react-native-firebase/auth';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
