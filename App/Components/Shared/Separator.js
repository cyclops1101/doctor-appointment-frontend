import { View, Text } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

export default function Separator() {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Colors.LIGHT_GREY,
        marginBottom: 15,
        marginTop: 10,
      }}
    ></View>
  );
}
