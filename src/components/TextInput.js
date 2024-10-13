import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = (props) => {
  return (
    <TextInput
      style={styles.textInputContainer}
      placeholder={props.btnText}
      value={props.value}
      onChangeText={(e) => props.setValue(e)}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputContainer: {
    width: "95%",
    backgroundColor: "#f7f7f7",
    paddingVertical: 16,
    paddingHorizontal: 6,
    marginVertical: 4,
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    alignSelf: "center",
  },
});
