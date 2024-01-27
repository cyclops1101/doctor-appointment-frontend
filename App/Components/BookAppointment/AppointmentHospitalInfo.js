import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

export default function AppointmentHospitalInfo({ hospital }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: hospital.attributes.Image.data[0].attributes.url }}
        style={{ width: 100, height: 100, borderRadius: 99 }}
      />
      <View>
        <Text
          style={{
            fontFamily: "appfont-semi",
            fontSize: 22,
            marginBottom: 8,
          }}
        >
          {hospital.attributes.Name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={18} color={Colors.PRIMARY} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "appfont",
              color: Colors.GREY,
              width: "70%",
            }}
          >
            {hospital.attributes.Address}
          </Text>
        </View>
      </View>
    </View>
  );
}
