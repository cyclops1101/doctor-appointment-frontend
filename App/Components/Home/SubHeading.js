import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "appfont-semi",
          fontSize: 20,
        }}
      >
        {subHeadingTitle}
      </Text>
      {seeAll && (
        <TouchableOpacity
          onPress={() => {
            return null;
          }}
        >
          <Text
            style={{
              fontFamily: "appfont",
              color: Colors.PRIMARY,
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
