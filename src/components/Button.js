import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";


const CustomButton = ({onPressFunction,btnText}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={styles.loginButtonContainer}
    >
      <View>
        <Text style={styles.loginButtonText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    loginButtonContainer: {
        width: "95%",
        overflow: "hidden",
        backgroundColor: "#fc1",
        paddingVertical: 16,
        paddingHorizontal: 6,
        marginVertical: 6,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      },
      loginButtonText: {
        fontSize: 16,
        fontWeight: "bold",
      },
});
