import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from "../helpers/Colors";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Footer(props) {
    return (
    <View style={styles.wrapper}>
        <Icon name="notifications-on" color="#FFF" />
        <Text style={styles.columnItem} >Pogotowie WOD-KAN</Text>
        <Text style={styles.columnItem}> tel. 994</Text>
        <Text style= {{...styles.columnItem, fontWeight: '700'}}> Adres</Text>
        <Text style={styles.columnItem}> Address Line1</Text>
        <Text style={styles.columnItem}> Address Line2</Text>
        <Text style= {{...styles.columnItem, fontWeight: '700'}}> Kontakt</Text>
        <Text style={styles.columnItem}> Overflow textttttttt overflow texttttttttttttttttttttttttttttttttttttttttttttttttttt</Text>
    </View>);
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        paddingVertical:20,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    columnItem: {
        paddingVertical:5,
        color: '#FFF',
        fontSize: 15,
    },
    columnTitle: {

    }
})