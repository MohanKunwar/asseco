import React from "react";
import { ScrollView, View, Text } from 'react-native';
import auth from "@react-native-firebase/auth";
import Colors from "../../helpers/Colors";
import {Button} from 'react-native-paper';
export default function HomeScreen() {


    return (
        <ScrollView>
            <View>
                <Text style={{ padding: 20, color: Colors.primary }}>Home</Text>
                <Button mode="contained"  onPress={() => auth().signOut()}>Logout</Button>
            </View>
        </ScrollView>
    );
}