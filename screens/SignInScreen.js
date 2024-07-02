import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignInScreen = ({ navigation }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  // const [data, setData] = useState({
  //   email: "",
  //   otp: "",
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  // });
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const textInputChange = (val) => {
    if (val.length !== 0) {
      // setData({ ...data, email: val });
    }
  };
  const checkOTP = (val) => {
    setIsSignIn(true);
  };
  const checkSignIn = (val) => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        iterationCount={1}
      >
        <Text style={styles.text_footer}>Phone</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Phone Number"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setPhone(val)}
            value={phone}
            keyboardType="numeric"
          />
          <Feather name="check-circle" color="green" size={20} />
        </View>

        {isSignIn && (
          <>
            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}
            >
              OTP
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your OTP"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => setOtp(val)}
                value={otp}
                keyboardType="numeric"
              />
              <Feather name="eye-off" color="grey" size={20} />
            </View>
          </>
        )}
        {isSignIn ? (
          <TouchableOpacity onPress={() => checkSignIn()}>
            <LinearGradient
              colors={["#94deff", "#1d6c98"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>SignIn</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => checkOTP()}>
            <LinearGradient
              colors={["#94deff", "#1d6c98"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get OTP</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d6c98",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  textSign: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
