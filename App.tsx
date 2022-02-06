/**
 * 
 * Sample React Native Web Electron App
 * https://github.com/DeveloperBlue
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * Medium Project Writeup
 * https://medium.com/@michaelrooplall
 * 
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Linking,
  Platform
} from 'react-native';

import PlatformComponent from './src/PlatformComponent/PlatformComponent';

const PressableLink = ({label, url} : {label : string, url : string}) => {

  const handleURL = () => {
    Linking.openURL(url);
  }

  return (
    <Pressable
      onPress={handleURL}
      style={{
        minWidth : '50%',
        borderRadius : 4,
        borderWidth : 1,
        borderColor : '#fff',
        paddingHorizontal : 16,
        paddingVertical : 8,
        marginHorizontal : 2
      }}
    >
      <Text style={[styles.text, {fontSize : 14, lineHeight : 14}]}>
          {label}
      </Text>
    </Pressable>
  )

}

const App = () => {

  return (
    <SafeAreaView style={styles.mainContainer} >
      
      <View style={styles.container}>
        <Text style={[styles.text, {fontSize : 28}]}>
          {`Welcome to React\u2011Native\u2011Web\u2011Electron`}
        </Text>
        <Text style={[styles.text, {fontSize : 16}]}>
          By Michael Rooplall
        </Text>
        <Text style={[styles.text, {fontSize : 18, marginTop : 60}]}>
          RNWE is a project made for building cross-platform applications on Android, iOS, Windows, MacOS, Linux, and the web — all from a single codebase.
        </Text>
        <View style={[styles.linkContainer, {marginTop : 60, marginBottom : 60}]}>
          <PressableLink label={'Medium Writeup'} url={'https://medium.com/@michaelrooplall'}/>
          <PressableLink label={'GitHub Repository'} url={'https://www.github.com/DeveloperBlue'}/>
        </View>
        <PlatformComponent/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer : {
    flex : 1,
    backgroundColor : '#e55555',
    alignItems : 'center',
    justifyContent : 'center'
  },
  container : {
    maxWidth : 800,
    padding : 40,
    alignItems : 'center',
  },
  text : {
    color : '#fff',
    fontWeight : '300',
    textAlign : 'center'
  },
  linkContainer : {
    flexDirection : 'row'
  }
});

export default App;
