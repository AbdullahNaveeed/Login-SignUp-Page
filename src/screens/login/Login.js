import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import CustomButton from "../../components/Button";
import CustomTextInput from "../../components/TextInput";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import {Dimensions} from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToSignupScreen = () => {
    navigation.navigate("Signup");
  };

  const handleLogin = async () => {
    
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "All input fields are required",
        position: "bottom",
      });
        
      return;
    }
    try {
      let userData = { email, password };
      let finalUserData = JSON.stringify(userData);
      console.log(finalUserData);
      await AsyncStorage.setItem("user", finalUserData);
      navigation.replace("HomeScreen");
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to login",
        position: "bottom",
      });
      console.error(e);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {/* image */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
        {/* inputs */}
        <View
          style={{
            marginVertical: 2,
          }}
        >
          <CustomTextInput
            btnText={"Email"}
            value={email}
            setValue={setEmail}
          />
          <CustomTextInput
            btnText={"Password"}
            value={password}
            setValue={setPassword}
          />
        </View>

        <View
          style={{
            marginVertical: 2,
          }}
        >
          <TouchableOpacity
            onPress={() =>handleLogin()}
            style={styles.loginButtonContainer}
          >
            <View>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.convertSignupScreenContainer}>
            <View>
              <Text
                style={styles.convertSignupScreenText}
                onPress={goToSignupScreen}
              >
                Don't have an account? Signup
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
