import { View, Text } from "react-native";
import React from "react";
import AppointmentList from "../Components/Appointment/AppointmentList";
import PageHeader from "../Components/Shared/PageHeader";

export default function Appointment() {
  return (
    <View
      style={{
        marginTop: 30,
        padding: 10,
      }}
    >
      <PageHeader title={"Appointments"} backButton={false} />
      <AppointmentList />
    </View>
  );
}
