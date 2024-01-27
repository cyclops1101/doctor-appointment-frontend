import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PageHeader({ title, backButton }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      {backButton && (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontFamily: "appfont-semi",
          fontSize: 25,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
