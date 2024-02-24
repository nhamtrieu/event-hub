import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import {StatusBar} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  const {getItem, setItem} = useAsyncStorage('accessToken');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    CheckLogin();
  }, []);

  const CheckLogin = async () => {
    const token = await getItem();
    setItem('');
    console.log(token);
    token && setAccessToken(token);
  };

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
