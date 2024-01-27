import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function BookAppointmentButton({ hospital }) {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate("book-appointment", {
          hospital,
        });
      }}
      style={{
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        margin: 10,
        borderRadius: 99,
        left: 0,
        right: 0,
        marginBottom: 10,
        zIndex: 20,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: Colors.WHITE,
          fontFamily: "appfont-semi",
          fontSize: 17,
        }}
      >
        Book Appointment
      </Text>
    </TouchableOpacity>
  );
}
