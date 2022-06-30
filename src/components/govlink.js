import React from "react";
import {Text, View} from 'react-native';
export default function GovLink(props) {
return  <View style={{flex:2, flexDirection: 'row'}}>
<Text>{props.text}</Text>
<Text>Image goes here!</Text>
</View>;
}