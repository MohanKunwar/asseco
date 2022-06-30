import React from "react";
import {View,Text, Image, StyleSheet} from 'react-native';
export default function AppHeader() {
    return (
        <View style={styles.container}>
            
         <Image style={styles.logo} source={require("../../assets/images/logo-top.png")} resizeMode="contain" />
         <Image style={styles.logo} source={require("../../assets/images/header-logo.png")} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',
    },
    logo: {
        width: '20%',
        height:35,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
});