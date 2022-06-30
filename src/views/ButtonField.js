import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import Colors from "../helpers/Colors";

export default function ButtonField(props) {
    const { labelText, submitting, color } = props;
    return (
      <TouchableOpacity
        {...props}
        disabled={submitting}
        style={{
          backgroundColor: Colors.orange,
          marginTop: 10,
          padding: 10,
          borderRadius: 5
        }}
      >
        <View style={styles.container}>
          {submitting ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.label}>{labelText}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  label: {
    fontSize: 15,
    paddingLeft: 5,
    color: "#fff"
  }
});
