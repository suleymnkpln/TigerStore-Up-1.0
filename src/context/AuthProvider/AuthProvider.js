import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthloading, setAuthLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@USER').then(userSession => {
      userSession && setUser(JSON.parse(userSession));
      setAuthLoading(false);
    });
  }, []);

  const store = createStore(reducers, {user, isAuthloading});
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
