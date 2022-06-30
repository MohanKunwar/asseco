import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {Checkbox } from 'react-native-paper';
import { TextField, PasswordField, ButtonField } from "../../views";
import Validation from "../../helpers/Validation";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import Footer from "../../components/footer";
import AppHeader from "../../components/header";
import Colors from "../../helpers/Colors";

Register.navigationOptions = {
  title: "Register",
  headerStyle: { backgroundColor: "#9e0b00" },
  headerTitleStyle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
    fontWeight: "700",
    marginLeft: -30
  }
};

export default function Register(props) {
  const [onSubmit, setSubmit] = useState(false);
  const [user, setUser] = useState({
    name: "",
    faktury: "",
    telefon: "",
    email: "",
    password: "",
    confirmPassword: "",
    reqCondition: false,
    term1: false,
    term2: false,
    term3: false,
    errorName: "",
    errorFaktury: "",
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errReq: true,
    onSubmit: false,
    submitClicked: false,
    errorMatch: false
  });


  registerClicked = () => {
    const updatedUser = { ...user };
    setSubmit(true);
    updatedUser.submitClicked = true;
    updatedUser.errorName = Validation.validates("required", user.name);
    updatedUser.errorFaktury = Validation.validates('required', user.faktury);
    updatedUser.errorEmail = Validation.validates("email", user.email);
    updatedUser.errorPassword = Validation.validates("password", user.password);
    updatedUser.errorConfirmPassword = Validation.validates(
      "password",
      user.confirmPassword
    );
    updatedUser.errorMatch =
      user.password != user.confirmPassword ? `Passwords don't match` : null;
    if (
      !updatedUser.errorName &&
      !updatedUser.errorEmail &&
      !updatedUser.errorFaktury &&
      !updatedUser.errorPassword &&
      !updatedUser.errorConfirmPassword &&
      !updatedUser.errorMatch &&
      user.errReq
      
    ) {
      auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(
          credentials => {
            const usr = {
              name: user.name,
              email: user.email,
              telefon: user.telefon,
              factory: user.faktury,
              term1: user.term1,
              term2: user.term2,
              term3: user.term3,
            };

            firestore()
              .collection("Users")
              .doc(`${credentials.user.uid}`)
              .set(usr);
          },
          error => {
            console.warn("err signup", error.message);
          }
        );
    } else {
      setSubmit(false);
      setUser(updatedUser);
    }
  };

  handleChange = (value, label, errorLabel, validation) => {
    const updatedUser = { ...user };
    updatedUser[label] = value;
    if (errorLabel) {
      updatedUser[errorLabel] = updatedUser.submitClicked ? validation : null;
    }
    if (label == 'password' || label=="confirmPassword") updatedUser.errorMatch = null;
    setUser(updatedUser);
  };

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={1}>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader />
          <Text style={{paddingVertical: 25, color: Colors.primary, fontWeight: '700', fontSize:20, textAlign: 'center'}}>REJESTRACJA UZYTKOWNIKA</Text>
          <TextField
            editable={!user.onSubmit}
            placeholder="Numer klienta*"
            value={user.name}
            onChangeText={value =>
              handleChange(
                value,
                "name",
                "errorName",
                Validation.validates("required", value.trim())
              )
            }
            error={user.errorName}
          />
          <TextField
            editable={!user.onSubmit}
            placeholder="Numer faktury*"
            value={user.faktury}
            onChangeText={value =>
              handleChange(
                value,
                "faktury",
                "errorFaktury",
                Validation.validates("required", value.trim())
              )
            }
            error={user.errorFaktury}
          />
          <TextField
            editable={!user.onSubmit}
            placeholder="Email*"
            value={user.email}
            onChangeText={value =>
              handleChange(
                value,
                "email",
                "errorEmail",
                Validation.validates("email", value.trim())
              )
            }
            error={user.errorEmail}
          />

          <TextField
            editable={!user.onSubmit}
            keyboardType="number-pad"
            placeholder="Mobile Number"
            value={user.telefon}
            onChangeText={value =>
              handleChange(
                value,
                "telefon",
              )
            }
          />

          <PasswordField
            editable={!user.onSubmit}
            placeholder="Haslo*"
            value={user.password}
            onChangeText={value =>
              handleChange(
                value,
                "password",
                "errorPassword",
                Validation.validates("password", value)
              )
            }
            error={user.errorPassword}
          />
          <PasswordField
            editable={!user.onSubmit}
            placeholder="Confirm Haslo*"
            value={user.confirmPassword}
            onChangeText={value =>
              handleChange(
                value,
                "confirmPassword",
                "errorConfirmPassword",
                Validation.validates("password", value)
              )
            }
            error={user.errorConfirmPassword}
          />

          <Text style={styles.error}>
            {user.errorMatch ? user.errorMatch : null}
          </Text>

          <Terms checked={user.reqCondition} text="required T and C" setChecked={value => handleChange(value, 'reqCondition', null, !value)} />
          <Terms checked={user.term1} text="required Terms and conditional with multile lines of text,Terms and conditional with multile lines of text,Terms and conditional with multile lines of text,Terms and conditional with multile lines of text" setChecked={value => handleChange(value, 'term1', null, !value)} />
          <Terms checked={user.term2} text="required T and C 2" setChecked={value => handleChange(value, 'term2', null, !value)} />
          <Terms checked={user.term3} text="required T and C 3" setChecked={value => handleChange(value, 'term3', null, !value)} />
          <ButtonField
            submitting={onSubmit}
            labelText={"WYSLIJ"}
            onPress={registerClicked}
          />
          
        </View>
          <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
var Terms = function (props) {
  return (
      <Checkbox.Item label={props.text} style={{ alignSelf:'flex-start' }} position='leading' labelStyle={{textAlign:"left"}}
      labelVariant="labelSmall"
        status={props.checked ? 'checked' : 'unchecked'}
        onPress={() => {
          props.setChecked(!(props.checked));
        }}
      />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 20,
    width: 100 + "%"
  },
  registerlabel: {
    color: "#626368",
    paddingTop: 5,
    paddingLeft: 5
    // fontFamily: Fonts.font
  },
  btn: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.orange,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "700",
  },
  error: {
    color: "#ff0000",
    fontSize: 11,
    height: 20
    // fontFamily: Fonts.font
  },
  customPicker: {}
});
