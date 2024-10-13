import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { STUDENTS } from "../../utils/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../utils/Color";
import CustomButton from "../../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };
  const logOutScreen = () => {
    console.log('logOutScreen');
  };
  const renderItem = ({ item, index }) => (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 8,
        borderRadius: 8,
        width: "45%",
      }}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 3 }}
      >
        {item.first_name + " " + item.last_name}
      </Text>

      <Text
        numberOfLines={2}
        style={{ fontWeight: "normal", fontSize: 16, paddingVertical: 5 }}
      >
        {item.email}
      </Text>
      <Text
        numberOfLines={1}
        style={{ fontWeight: "normal", fontSize: 16, paddingVertical: 2 }}
      >
        {item.gender}
      </Text>
    </View>
  );
  const renderItemHorizontal = ({ item, index }) => (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        padding: 16,
        marginVertical: 8,
        marginBottom: 20,
        marginLeft: 18,
        borderRadius: 8,
        width: 300,
        height: 130,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 3 }}>
        {item.first_name + " " + item.last_name}
      </Text>
      <Text
        numberOfLines={2}
        style={{ fontWeight: "normal", fontSize: 16, paddingVertical: 5 }}
      >
        {item.email}
      </Text>
      <Text
        numberOfLines={1}
        style={{ fontWeight: "normal", fontSize: 16, paddingVertical: 2 }}
      >
        {item.gender}
      </Text>
    </View>
  );

  // return (
  //   <View style={{ flex: 1 }}>
  //     <ScrollView
  //       style={{ flex: 1, height: "100%" }}
  //       contentContainerStyle={{ flexGrow: 1 }}
  //       showsVerticalScrollIndicator={false}
  //     >
  //       <SafeAreaView>
  //         <View style={{ flex: 1 }}>
  //           <View
  //             style={{
  //               marginVertical: 8,
  //               marginHorizontal: 4,
  //             }}
  //           >
  //             <Text
  //               style={{
  //                 fontSize: 28,
  //                 fontWeight: "bold",
  //               }}
  //             >
  //               Students
  //             </Text>
  //           </View>
  //           <FlatList
  //             data={STUDENTS}
  //             renderItem={renderItem}
  //             keyExtractor={(item) => String(item?.id)}
  //             numColumns={2}
  //           ></FlatList>
  //           <FlatList
  //             horizontal
  //             data={STUDENTS}
  //             renderItem={renderItemHorizontal}
  //             keyExtractor={(item) => String(item?.id)}
  //           ></FlatList>
  //         </View>
  //       </SafeAreaView>
  //     </ScrollView>
  //   </View>
  // );
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 4,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Students
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {STUDENTS.map((student) => (
              <View
                key={student.id}
                style={{
                  borderWidth: 2,
                  borderColor: getRandomColor()?.borderColor,
                  borderRadius: 100,
                  backgroundColor: getRandomColor()?.hex,
                  padding: 16,
                  marginVertical: 8,
                  marginHorizontal: 8,
                  borderRadius: 6,
                  width: "45%",
                }}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingVertical: 3,
                  }}
                >
                  {student.first_name + " " + student.last_name}
                </Text>

                <Text
                  numberOfLines={2}
                  style={{
                    fontWeight: "normal",
                    fontSize: 16,
                    paddingVertical: 5,
                  }}
                >
                  {student.email}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "normal",
                    fontSize: 16,
                    paddingVertical: 2,
                  }}
                >
                  {student.gender}
                </Text>
              </View>
            ))}
          </View>
        <CustomButton onPressFunction={logOutScreen} btnText={"Log Out"}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
