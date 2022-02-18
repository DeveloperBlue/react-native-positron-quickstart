/**
 * PlatformComponent.electron.tsx
 */

 import React from 'react';
 import {
     StyleSheet,
     Text,
     View,
 } from 'react-native';
 
 const PlatformComponent = () => {
     return (
         <View style={styles.platformComponent}>
             <Text style={styles.platformComponentText}>
                 This component was loaded for Electron!
             </Text>
         </View>
     )
 }
 
 const styles = StyleSheet.create({
     platformComponent : {
         padding : 40,
         borderRadius : 8,
         borderColor : '#fff',
         borderStyle : 'dashed',
         borderWidth : 1,
         width : '100%',
         backgroundColor : '#ffffff20'
     },
     platformComponentText : {
         textAlign : 'center',
         fontWeight : '300',
         fontSize : 18,
         color : '#fff'
     }
 });
  
 export default PlatformComponent