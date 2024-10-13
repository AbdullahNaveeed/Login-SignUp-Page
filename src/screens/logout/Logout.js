import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React from "react";
import { heightRef } from "../../utils/Dimensions";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Splash");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flex: 1, height: "100%", width: "100%" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 16,
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              height: 400 * heightRef,
              width: "90%",
              borderRadius: 8,
              shadowColor: "#707070",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.15,
              shadowRadius: 4,
            }}
          >
            <TouchableOpacity
              onPress={() => handleLogout()}
              activeOpacity={0.6}
              style={{
                //   backgroundColor: "red",
                paddingVertical: 12 * heightRef,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8 * heightRef,
                borderBottomWidth: 1,
                borderBlockColor: "#e7e7e7",
              }}
            >
              <Text
                style={{
                  fontSize: 16 * heightRef,
                }}
              >
                Logout
              </Text>
              <Ionicons
                name="chevron-forward"
                color={"#000000"}
                size={20 * heightRef}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Settings;
