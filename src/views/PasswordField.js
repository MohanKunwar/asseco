import React, { useState } from 'react';
import { Icon } from 'react-native-vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
export default function PasswordField(props) {
  return (
    <View>
      <TextInput
        {...props}
        editable={true}
        style={[
          {
            width: 100 + '%',
            height: 40,
            backgroundColor: '#fff'
          },
          props.error ? styles.errorInput : null
        ]}
        secureTextEntry={true}
      />
      <Text style={styles.error}>{props.error ? props.error : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  error: {
    color: '#ff0000',
    fontSize: 10
  },

  errorInput: {
    borderColor: '#ff0000'
  }
});

// PasswordField.defaultProps = {
//   iconSize: 25,
//   label: 'Password',
//   iconColor: '#01A7DB'
// };
