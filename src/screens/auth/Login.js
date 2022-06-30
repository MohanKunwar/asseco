import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions
} from "react-native";
import Validation from "../../helpers/Validation";
import auth from "@react-native-firebase/auth";
import Colors from "../../helpers/Colors";
import { Button, Divider } from "react-native-paper";
import { TextField, ButtonField, PasswordField } from '../../views';
import Footer from '../../components/footer';
import GovLink from "../../components/govlink";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from "../../components/header";

function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChangeText: text => setValue(text.trim())
  };
}
export default function Login(props) {
  let [onSubmit, setSubmit] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);
  let [serverError, setServerError] = useState(false);
  let [errorPassword, setErrorPassword] = useState(false);
  const email = useTextInput('');
  const password = useTextInput('');
  const windowWidth = Dimensions.get('window').width;
  onLoginPressed = () => {
    setSubmit(true);
    setErrorEmail(Validation.validates("email", email.value));
    setErrorPassword(Validation.validates("password", password.value));

    if (!errorEmail && !errorPassword) {
      auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => { },
          error => {
            setServerError(error.message);
            setSubmit(false);
          }
        );
    } else {
      setSubmit(false);
    }
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={1}>
      <ScrollView >
          <View style={styles.container}>
            <AppHeader />
            <Image style={{ flex: 1, width: windowWidth - 20, height: windowWidth * .6 }} source={require("../../../assets/images/3949076.webp")} resizeMode="contain" />
            <View style={{ paddingHorizontal: 10, alignItems: 'center' }}>
              <Text style={styles.titleText}>LOGOWANIE</Text>
              <View style={{ padding: 10, width: '100%' }}>
                <TextField
                  placeholder='Login'
                  editable={!onSubmit}
                  {...email}
                  error={onSubmit ? errorEmail : null}
                />

                <PasswordField
                  placeholder='Password'
                  editable={!onSubmit}
                  {...password}
                  error={onSubmit ? errorPassword : null}
                />
                <Text style={{ color: Colors.primary, alignSelf: 'flex-end', textDecorationLine: 'underline', paddingVertical: 15 }} > Forgot password?</Text>
              </View>
              <Button style={styles.btn} mode="contained" onPress={onLoginPressed}>ZALOGUJ SIE</Button>
              <GovLink text="ZALOGUJ SIE PRZEZ  " />
              <Divider bold="true" />
              <Text style={[styles.titleText, { paddingHorizontal: 15 }]}>REJESTRACJA</Text>
              <Text>Jesli nie masz jeszcze konta w nowym systemie eBOK, zarajestruj sie i sprawdz cooferuje</Text>
              <Icon style={{ paddingTop: 20 }} name="tv" color={Colors.primary} size={100} />
              <Icon style={{ marginTop: -85, paddingBottom: 40 }} name="play-arrow" color={Colors.primary} size={60} />
              <Button style={styles.btn} mode="contained" onPress={() => props.navigation.replace("Register")}>ZALOZ KONTA</Button>
              <GovLink text="ZALOZ KONTA PRZEZ " />
              <Divider /></View>
          </View>
          <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    width: 100 + "%",
  },
  titleText: {
    color: Colors.primary,
    fontWeight: "700",
    padding: 20,
    fontSize: 20,
  },
  errorServer: {
    color: Colors.error,
    textAlign: "center",
    padding: 10,
    fontWeight: "600"
    // fontFamily: Fonts.font
  },

  user: {
    fontSize: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline"
  },
  btn: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.orange,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "700",
  },
  checking: {
    color: Colors.btnLabel,
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "600",
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.btnExtra,
    borderRadius: 15,
    fontFamily: "titillium"
  }
});
