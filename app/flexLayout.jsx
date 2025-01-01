
import React from 'react';
import { View, Text } from 'react-native';

const FlexLayout = () => {
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
    <View style={{flex:1,backgroundColor:"green"}}></View>
    <View style={{flex:4,backgroundColor:"yellow",flexDirection:"row",gap:20}}>
    <View style={{  flex:2,width:100,height: 100, backgroundColor: "gray"}}></View>
    <View style={{flex:1,width:100,height:100,backgroundColor:"blue"}}></View>
    <View style={{flex:1,width:100,height:100,backgroundColor:"red"}}></View>
    <View style={{flex:2,width:100,height:100,backgroundColor:"orange"}}></View>

    </View>
    <View style={{flex:1,backgroundColor:"blue"}}></View>
    </View>
  );
}

export default FlexLayout;
