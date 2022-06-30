import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
export default function TextField(props) {
  return (
    <View style={{width:'100%'}}>
      <TextInput
      
      mode="flat"
        {...props}
        editable={props.editable}
        style={[
          {
            width: 100 + "%",
            height: 40,
            backgroundColor: "#fff"
          },
          props.error ? styles.errorInput : null
        ]}
      />
      <Text style={styles.error}> {props.error ? props.error : ""}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  error: {
    color: "#ff0000",
    fontSize: 11,
    height: 15
  },

  errorInput: {
    borderColor: "#ff0000"
  }
});
