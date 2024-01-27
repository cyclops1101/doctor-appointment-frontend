import { View, Text } from "react-native";
import React from "react";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export default function AppointmentItemCard({ appointment }) {
  const navigation = useNavigation;
  return (
    <View
      style={{
        padding: 10,
        margin: 5,
        marginBottom: 15,
      }}
    >
      <Text>{appointment.attributes.hospital.data.attributes.Name}</Text>
      <Text>{moment(appointment.attributes.DateTime).format("LLLL")}</Text>
    </View>
  );
}
