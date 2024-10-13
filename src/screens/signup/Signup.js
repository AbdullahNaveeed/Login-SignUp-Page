import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/Button";
import CustomTextInput from "../../components/TextInput";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const gotoLoginScreen = () => {
    navigation.navigate("Login");
  };
  const goToHomeScreen = () => {
    navigation.navigate("BottomTabNavigation");
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        {/* image */}
        <View
          style={{
            alignSelf: "center",
            marginVertical: 2,
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        {/* inputs */}
        <View
          style={{
            marginVertical: 2,
          }}
        >
          <CustomTextInput btnText={"Name"} value={name} setValue={setName} />
          <CustomTextInput btnText={"Email"} value={email} setValue={setEmail} />
          <CustomTextInput btnText={"Phone Number"} value={phone} setValue={setPhone} />
          <CustomTextInput btnText={"Password"} value={password} setValue={setPassword}
          />
        </View>

        <View
          style={{
            marginVertical: 2,
          }}
        >
          <CustomButton onPressFunction={goToHomeScreen} btnText={"Sign Up"} />
          <TouchableOpacity
            style={{
              width: "90%",
              overflow: "hidden",
              paddingVertical: 16,
              paddingHorizontal: 6,
              marginVertical: 4,
              borderRadius: 4,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
                onPress={gotoLoginScreen}
              >
                Back to Log In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
