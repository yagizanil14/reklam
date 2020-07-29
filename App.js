import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {AdMobBanner} from 'react-native-admob';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

const App=()=> {
  return (
    <NavigationContainer>
    <SafeAreaView style={{flex:1}}>
        <View style={styles.containerAd}>
        <AdMobBanner
        adSize="smartBannerPortrait"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
      />
        </View>
        
      </SafeAreaView>      
      </NavigationContainer>
      
  );
}

export default App;

const styles = StyleSheet.create({
  containerAd:{
    width: '100%',
    alignItems: 'center'
  }
});
