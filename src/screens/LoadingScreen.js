import React from "react";
import { Image, View } from "react-native";
import auth from "@react-native-firebase/auth";

export default function LoadingScreen(props) {
  auth().onAuthStateChanged(user => { 
    console.log(user);
    props.navigation.replace(!user ? 'Auth' : 'Main');
   });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#991A75"
      }}
    >
      <Image
        resizeMode={"contain"}
        style={{
          width: 250,
          height: 250,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        source={require("../../assets/background.jpg")}
      />
    </View>
  );
}
LoadingScreen.navigationOptions = {
  header: null
};
