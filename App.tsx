import { useEffect, useRef } from 'react';
import { StatusBar, Text } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications'

import { Background } from './src/components/Background';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

import './src/service/notificationsConfigs';
import { getPushNotificationToken } from './src/service/getPushNotificationToken';

export default function App() {
  const getPushNotificationListner = useRef<Subscription>();
  const responseNotificationListner = useRef<Subscription>();

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  useEffect(()=>{
    getPushNotificationToken();
  }, [])

  useEffect(()=>{
      getPushNotificationListner.current = Notifications.
      addNotificationReceivedListener(notfication => {})
      
      responseNotificationListner.current = Notifications
      .addNotificationResponseReceivedListener(notfication => {})

      return () => {
        if(getPushNotificationListner.current && responseNotificationListner.current){
          Notifications.removeNotificationSubscription(getPushNotificationListner.current)
          Notifications.removeNotificationSubscription(responseNotificationListner.current)
        }
      }
  }, [])

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading size='large'/> }
    </Background>
  );
}